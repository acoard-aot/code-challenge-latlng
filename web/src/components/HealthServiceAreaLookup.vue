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
          <v-col>
            <v-text-field
              label="Latitude"
              :rules="[(v) => !!value || 'Required.']"
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
        <v-row v-if="!!areaName">
          <v-col> Community Health Service Area of {{ areaName }} </v-col>
        </v-row>
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

  isValid = false;
  isLoading = false;
  latitude = "+48.8277";
  longitude = "-123.711";
  areaName? = "";

  private async submitRequest() {
    this.isLoading = true;
    this.areaName = undefined;

    const response = await this.lookupService.getAreaName({
      latitude: this.latitude,
      longitude: this.longitude,
    });
    if (response.status == RequestStatus.Success) {
      this.areaName = response.data;
    }
    this.isLoading = false;
  }
}
</script>
