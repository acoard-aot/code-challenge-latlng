<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    </v-app-bar>

    <v-main>
      <HealthServiceAreaLookup />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HealthServiceAreaLookup from "./components/HealthServiceAreaLookup.vue";

export default Vue.extend({
  name: "App",

  components: {
    HealthServiceAreaLookup,
  },

  data: () => ({
    //
  }),
});
</script>
