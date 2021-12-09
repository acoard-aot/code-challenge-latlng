<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Community Health Service Area Lookup</h1>
        <p>
          Provide the Latitude and Longitude of the desired location to know its
          corresponding Community Health Service Area.
        </p>
      </v-col>
    </v-row>
      <v-form 
        @submit="submitRequest" 
        ref="form"
        v-model="isValid"
        lazy-validation
      >
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field 
                label="Latitude"
                v-model="latitude" 
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field 
                label="Longitude"
                v-model="longitude" 
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn type="submit">Lookup</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Inject } from "inversify-props";
import { Types } from "@/inversify.container.ts";
import IHealthServiceArea from "@/services/IHealthServiceArea";

export default class HealthServiceAreaLookup extends Vue {
  @Inject(Types.HealthServiceArea)
  private lookupService!: IHealthServiceArea

  isValid = false;
  latitude = "+48.8277";
  longitude = "-123.711";

  private submitRequest = () => {
    const areaName = this.lookupService.getAreaName()
    alert(areaName);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
