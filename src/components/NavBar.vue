<template>
  <v-card class="">
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="../../public/img/bar_1.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon>
        <v-icon color="blue">mdi-liquor</v-icon>
      </v-app-bar-nav-icon>

      <!-- <h2>POSBAR System</h2> -->
      <v-app-title class="mt-2">POSBAR System</v-app-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab @click="menuHome">Home</v-tab>
          <v-tab @click="menuUsuarios">Usuarios</v-tab>
          <v-tab @click="menuProductos">Productos</v-tab>
          <v-tab @click="menuVentas">Ventas</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {},
  methods: {
    menuHome() {
      this.$router.push("/");
    },
    menuProductos() {
      this.$router.push("/products");
    },
    menuUsuarios() {
      this.$router.push("/users");
    },
    menuVentas() {
      this.$router.push("/sales");
    },
  },
};
</script>
