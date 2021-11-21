<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="productos"
      :search="search"
      sort-by="id"
      class="elevation-3"
    >
      <template v-slot:item.image="{ item }">
        <v-avatar>
          <img :src="'http://localhost:3000/' + item.image" :alt="item.sku" />
        </v-avatar>
      </template>
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
          <v-toolbar-title>Productos</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <!--  Modal del diálogo para Alta y Edicion    -->
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                Crear Producto
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
                    <v-col cols="12" class="mt-4">
                      <template>
                        <v-row justify="space-around">
                          <v-avatar size="150" v-if="editado.image">
                            <img
                              :src="'http://localhost:3000/' + editado.image"
                            />
                          </v-avatar>
                        </v-row>
                      </template>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        prepend-icon="mdi-qrcode-scan"
                        v-model="editado.sku"
                        label="SKU"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-select
                        prepend-icon="mdi-alpha-c-circle-outline"
                        v-model="editado.categoria_producto"
                        :items="categorias"
                        label="Seleccione la categoria del producto"
                      ></v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        prepend-icon="mdi-alpha-p-circle-outline"
                        v-model="editado.nombre_producto"
                        label="Nombre del Producto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-file-input
                        v-model="editado.image"
                        label="Imagen del producto"
                        @change="onFileSelected"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        prepend-icon="mdi-currency-usd"
                        v-model="editado.precio_compra_producto"
                        type="number"
                        step="1"
                        min="0"
                        label="Precio de compra del producto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        prepend-icon="mdi-currency-usd"
                        v-model="editado.precio_venta_producto"
                        type="number"
                        step="1"
                        min="0"
                        label="Precio de venta del producto"
                      ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12" v-show="editado.image">
                      <v-avatar size="128">
                        <v-img
                          max-width="250"
                          :src="'http://localhost:3000/' + editado.image"
                        ></v-img>
                      </v-avatar>
                    </v-col> -->
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
    image: null,
    search: "", //para el cuadro de búsqueda de datatables
    snackbar: false, //para el mensaje del snackbar
    textSnack: "texto snackbar", //texto que se ve en el snackbar
    dialog: false, //para que la ventana de dialogo o modal no aparezca automáticamente
    //definimos los headers de la datatables
    headers: [
      { text: "IMG", value: "image" },
      {
        text: "SKU - COD",
        align: "left",
        sortable: true,
        value: "sku",
      },
      { text: "CATEGORIA", value: "categoria_producto" },
      { text: "NOMBRE", value: "nombre_producto" },
      { text: "PRECIO COMPRA", value: "precio_compra_producto" },
      { text: "PRECIO VENTA", value: "precio_venta_producto", sortable: true },
      { text: "Acciones", value: "actions", sortable: false },
    ],
    productos: [], //definimos el array productos
    categorias: ["Bebidas calientes", "Bebidas frias", "Comestible"],
    editedIndex: -1,
    editado: {
      image: null,
      sku: "",
      categoria_producto: "",
      nombre_producto: "",
      precio_compra_producto: "",
      precio_venta_producto: "",
    },
    defaultItem: {
      image: null,
      sku: "",
      categoria_producto: "",
      nombre_producto: "",
      precio_compra_producto: "",
      precio_venta_producto: "",
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
    this.listarProductos();
  },

  methods: {
    onFileSelected(event) {
      console.log(event);
      this.image = event;
    },
    //PROCEDIMIENTOS para el CRUD
    //Procedimiento Listar productos
    listarProductos: function () {
      this.axios.get("/products").then((response) => {
        this.productos = response.data;
      });
    },
    //Procedimiento Alta de productos.
    altaProducto: function () {
      const formData = new FormData();
      formData.append("image", this.editado.image);
      formData.append("sku", this.editado.sku);
      formData.append("categoria_producto", this.editado.categoria_producto);
      formData.append("nombre_producto", this.editado.nombre_producto);
      formData.append(
        "precio_compra_producto",
        this.editado.precio_compra_producto
      );
      formData.append(
        "precio_venta_producto",
        this.editado.precio_venta_producto
      );

      this.axios.post("/products", formData).then((response) => {
        this.listarProductos();
      });
      (this.image = null),
        (this.sku = ""),
        (this.categoria_producto = ""),
        (this.nombre_producto = ""),
        (this.precio_compra_producto = ""),
        (this.precio_venta_producto = "");
    },
    //Procedimiento EDITAR.
    editarProducto: function (
      id,
      image,
      sku,
      categoria_producto,
      nombre_producto,
      precio_compra_producto,
      precio_venta_producto
    ) {
      this.axios
        .put(`/products/${id}`, {
          id: id,
          image: image,
          sku: sku,
          categoria_producto: categoria_producto,
          nombre_producto: nombre_producto,
          precio_compra_producto: precio_compra_producto,
          precio_venta_producto: precio_venta_producto,
        })
        .then((response) => {
          this.listarProductos();
        });
    },
    //Procedimiento BORRAR.
    borrarProducto: function (id) {
      this.axios.delete(`/products/${id}`, { id: id }).then((response) => {
        this.listarProductos();
      });
    },
    editar(item) {
      this.editedIndex = this.productos.indexOf(item);
      this.editado = Object.assign({}, item);
      this.dialog = true;
    },
    borrar(item) {
      const index = this.productos.indexOf(item);

      console.log(this.productos[index]._id); //capturo el id de la fila seleccionada
      var r = confirm("¿Está seguro de borrar el registro?");
      if (r == true) {
        this.borrarProducto(this.productos[index]._id);
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
        this.image = this.editado.image;
        this.sku = this.editado.sku;
        this.categoria_producto = this.editado.categoria_producto;
        this.nombre_producto = this.editado.nombre_producto;
        this.precio_compra_producto = this.editado.precio_compra_producto;
        this.precio_venta_producto = this.editado.precio_venta_producto;
        this.snackbar = true;
        this.textSnack = "¡Actualización Exitosa!";
        this.editarProducto(
          this.id,
          this.image,
          this.sku,
          this.categoria_producto,
          this.nombre_producto,
          this.precio_compra_producto,
          this.precio_venta_producto
        );
      } else {
        //Guarda el registro en caso de Alta
        if (
          this.editado.sku == "" ||
          this.editado.image == null ||
          this.editado.categoria_producto == "" ||
          this.editado.nombre_producto == "" ||
          this.editado.precio_compra_producto == "" ||
          this.editado.precio_venta_producto == ""
        ) {
          this.snackbar = true;
          this.textSnack = "Datos incompletos.";
        } else {
          this.sku = this.editado.sku;
          this.image = this.editado.image;
          this.categoria_producto = this.editado.categoria_producto;
          this.nombre_producto = this.editado.nombre_producto;
          this.precio_compra_producto = this.editado.precio_compra_producto;
          this.precio_venta_producto = this.editado.precio_venta_producto;
          this.snackbar = true;
          this.textSnack = "¡Alta exitosa!";
          this.altaProducto();
        }
      }
      this.cancelar();
    },
  },
};
</script>
