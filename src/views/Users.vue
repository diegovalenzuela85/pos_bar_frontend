<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="usuarios"
      :search="search"
      sort-by="id"
      class="elevation-3"
    >
      <template v-slot:top>
        <!-- Barra de búsqueda  -->
        <v-col cols="12" sm="12">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify-expand"
            label="Buscar"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
        <v-toolbar flat>
          <v-toolbar-title>Usuarios</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <!--  Modal del diálogo para Alta y Edicion    -->
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Crear Usuario
              </v-btn>
            </template>
            <v-card>
              <!-- para el EDICION-->
              <v-card-title class="cyan white--text">
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        prepend-icon="mdi-cursor-text"
                        v-model="editado.name"
                        :rules="nameRules"
                        label="Nombre"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        prepend-icon="mdi-cursor-text"
                        v-model="editado.lastname"
                        :rules="lastnameRules"
                        label="Apellidos"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-smart-card"
                        v-model="editado.document"
                        :rules="documentRules"
                        type="number"
                        step="1"
                        min="0"
                        label="Documento"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-email-check"
                        v-model="editado.email"
                        :rules="emailRules"
                        type="email"
                        label="Correo electronico"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        prepend-icon="mdi-phone-in-talk"
                        v-model="editado.phone"
                        :rules="phoneRules"
                        type="phone"
                        label="Telefono"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        prepend-icon="mdi-account-check"
                        v-model="editado.username"
                        :rules="usernameRules"
                        label="Username"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        prepend-icon="mdi-account-lock"
                        v-model="editado.password"
                        :rules="passwordRules"
                        type="password"
                        label="Password"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-grey"
                  class="ma-2 white--text"
                  @click="cancelar"
                  >Cancelar</v-btn
                >
                <v-btn
                  color="teal accent-4"
                  class="ma-2 white--text"
                  @click="guardar"
                  >Guardar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn class="mr-2" fab dark small color="cyan" @click="editar(item)">
          <v-icon dark>mdi-pencil</v-icon>
        </v-btn>
        <v-btn class="mr-2" fab dark small color="error" @click="borrar(item)">
          <v-icon dark>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>

    <!-- template para el snackbar-->
    <template>
      <div class="text-center ma-2">
        <v-snackbar v-model="snackbar">
          {{ textSnack }}
          <v-btn color="info" text @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>
      </div>
    </template>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    nameRules: [
      (v) => !!v || "El Nombre es requerido",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    lastnameRules: [
      (v) => !!v || "El Apellido es requerido",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    documentRules: [
      (v) => !!v || "El Documento es requerido",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v) => !!v || "El E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phoneRules: [
      (v) => !!v || "El Telefono es requerido",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    usernameRules: [
      (v) => !!v || "El username es requerido",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    passwordRules: [
      (v) => !!v || "El password es requerido",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    search: "", //para el cuadro de búsqueda de datatables
    snackbar: false, //para el mensaje del snackbar
    textSnack: "texto snackbar", //texto que se ve en el snackbar
    dialog: false, //para que la ventana de dialogo o modal no aparezca automáticamente
    //definimos los headers de la datatables
    headers: [
      {
        text: "DOCUMENTO",
        align: "left",
        sortable: true,
        value: "document",
      },
      { text: "NOMBRE", value: "name" },
      { text: "APELLIDOS", value: "lastname" },
      { text: "EMAIL", value: "email" },
      { text: "TELEFONO", value: "phone", sortable: true },
      { text: "USERNAME", value: "username", sortable: false },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    usuarios: [], //definimos el array usuarios
    editedIndex: -1,
    editado: {
      document: "",
      name: "",
      lastname: "",
      email: "",
      phone: "",
      username: "",
      password: "",
    },
    defaultItem: {
      document: "",
      name: "",
      lastname: "",
      email: "",
      phone: "",
      username: "",
      password: "",
    },
  }),

  computed: {
    //Dependiendo si es Alta o Edición cambia el título del modal
    formTitle() {
      //operadores condicionales "condición ? expr1 : expr2"
      // si <condicion> es true, devuelve <expr1>, de lo contrario devuelve <expr2>
      return this.editedIndex === -1 ? "Nuevo Registro" : "Editar Registro";
    },
  },

  watch: {
    dialog(val) {
      val || this.cancelar();
    },
  },

  created() {
    this.listarUsuarios();
  },

  methods: {
    //PROCEDIMIENTOS para el CRUD
    //Procedimiento Listar usuarios
    listarUsuarios: function () {
      this.axios.get("/users").then((response) => {
        this.usuarios = response.data;
      });
    },
    //Procedimiento Alta de usuario.
    altaUsuario: function () {
      this.axios
        .post("/users", {
          document: this.document,
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.listarUsuarios();
        });
      (this.document = ""),
        (this.name = ""),
        (this.lastname = ""),
        (this.email = ""),
        (this.phone = ""),
        (this.username = ""),
        (this.password = "");
    },
    //Procedimiento EDITAR.
    editarUsuario: function (
      id,
      document,
      name,
      lastname,
      email,
      phone,
      username,
      password
    ) {
      this.axios
        .put(`/users/${id}`, {
          id: id,
          document: document,
          name: name,
          lastname: lastname,
          email: email,
          phone: phone,
          username: username,
          password: password,
        })
        .then((response) => {
          this.listarUsuarios();
        });
    },
    //Procedimiento BORRAR.
    borrarUsuario: function (id) {
      this.axios.delete(`/users/${id}`, { id: id }).then((response) => {
        console.log(`Esto lo captura borrarUsuario ${id}`);
        this.listarUsuarios();
      });
    },
    editar(item) {
      this.editedIndex = this.usuarios.indexOf(item);
      this.editado = Object.assign({}, item);
      this.dialog = true;
    },
    borrar(item) {
      const index = this.usuarios.indexOf(item);

      console.log(this.usuarios[index]._id); //capturo el id de la fila seleccionada
      var r = confirm("¿Está seguro de borrar el registro?");
      if (r == true) {
        this.borrarUsuario(this.usuarios[index]._id);
        this.snackbar = true;
        this.textSnack = "Se eliminó el registro.";
      } else {
        this.snackbar = true;
        this.textSnack = "Operación cancelada.";
      }
    },
    cancelar() {
      this.dialog = false;
      this.editado = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    },
    guardar() {
      if (this.editedIndex > -1) {
        //Guarda en caso de Edición
        this.id = this.editado.id;
        this.document = this.editado.document;
        this.name = this.editado.name;
        this.lastname = this.editado.lastname;
        this.email = this.editado.email;
        this.phone = this.editado.phone;
        this.username = this.editado.username;
        this.password = this.editado.password;
        this.snackbar = true;
        this.textSnack = "¡Actualización Exitosa!";
        this.editarUsuario(
          this.id,
          this.document,
          this.name,
          this.lastname,
          this.email,
          this.phone,
          this.username,
          this.password
        );
      } else {
        //Guarda el registro en caso de Alta
        if (
          this.editado.document == "" ||
          this.editado.name == "" ||
          this.editado.lastname == "" ||
          this.editado.email == "" ||
          this.editado.phone == "" ||
          this.editado.username == "" ||
          this.editado.password == ""
        ) {
          this.snackbar = true;
          this.textSnack = "Datos incompletos.";
        } else {
          this.document = this.editado.document;
          this.name = this.editado.name;
          this.lastname = this.editado.lastname;
          this.email = this.editado.email;
          this.phone = this.editado.phone;
          this.username = this.editado.username;
          this.password = this.editado.password;
          this.snackbar = true;
          this.textSnack = "¡Alta exitosa!";
          this.altaUsuario();
        }
      }
      this.cancelar();
    },
  },
};
</script>
