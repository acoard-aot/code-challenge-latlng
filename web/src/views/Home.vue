<template>
  <v-container>
    <health-service-area-lookup />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HealthServiceAreaLookup from "../components/HealthServiceAreaLookup.vue";

export default defineComponent({
  name: "Home",

  components: {
    HealthServiceAreaLookup,
  },
});
</script>
