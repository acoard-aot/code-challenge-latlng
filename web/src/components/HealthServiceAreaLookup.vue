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
    >
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              label="Latitude"
              :rules="[(v) => !!v || 'Required.']"
              v-model="latitude"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field label="Longitude" v-model="longitude" required />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn type="submit">
              <v-progress-circular v-if="isLoading" indeterminate />
              <span v-else>Lookup</span>
            </v-btn>
          </v-col>
        </v-row>
        <div v-if="!!errorMessage" class="text-center">
          <v-row>
            <v-col><span>{{ errorMessage }}</span></v-col>
          </v-row>
        </div>
        <div v-else-if="!!areaName" class="text-center">
          <v-row>
            <v-col>Corresponding Community Health Service Area: </v-col>
          </v-row>
          <v-row>
            <v-col>
              <strong v-if="areaName == ' '"> {{ "Not Found" }} </strong>
              <strong v-else> {{ areaName }} </strong>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Inject } from "inversify-props";
import { Types } from "@/inversify.config.ts";
import IHealthServiceArea from "@/services/interfaces/IHealthServiceArea";
import { RequestStatus } from "@/models/RequestStatus";

export default class HealthServiceAreaLookup extends Vue {
  @Inject(Types.HealthServiceAreaLookup)
  private lookupService!: IHealthServiceArea;

  invalid = false;
  isLoading = false;
  latitude = "+48.8277";
  longitude = "-123.711";
  areaName? = "";
  errorMessage? = "";

  private async submitRequest() {
    this.isLoading = true;
    this.areaName = undefined;
    this.errorMessage = undefined;

    const response = await this.lookupService.getAreaName({
      latitude: this.latitude,
      longitude: this.longitude,
    });
    if (response.status == RequestStatus.Success) {
      this.areaName = response.getAreaName();
    } else {
      this.errorMessage = response.message;
    }
    this.isLoading = false;
  }
}
</script>
