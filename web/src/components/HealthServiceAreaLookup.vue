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
    <v-form @submit.prevent="submitRequest" ref="form" v-model="isValid">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              data-testid="latitude"
              label="Latitude"
              :rules="[
                (v) => !!v || 'Required.',
                (v) =>
                  /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(
                    v
                  ) || 'Invalid Latitude',
              ]"
              v-model="latitude"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              data-testid="longitude"
              label="Longitude"
              :rules="[
                (v) => !!v || 'Required.',
                (v) =>
                  /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/.test(
                    v
                  ) || 'Invalid Longitude',
              ]"
              v-model="longitude"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn type="submit" :disabled="!isValid">
              <v-progress-circular v-if="isLoading" indeterminate />
              <span v-else>Lookup</span>
            </v-btn>
          </v-col>
        </v-row>
        <div v-show="!!errorMessage" class="text-center">
          <v-row>
            <v-col
              ><v-alert data-testid="errorMessage" type="error">{{ errorMessage }}</v-alert></v-col
            >
          </v-row>
        </div>
        <div v-show="!errorMessage && !!areaName" class="text-center">
          <v-row>
            <v-col>
              <v-alert v-show="areaName == ' '" type="warning"
                >Community Health Service Area <br />Not Found</v-alert
              >
              <v-alert v-show="areaName != ' '" data-testid="successMessage" type="success"
                >Community Health Service Area: <br />{{ areaName }}</v-alert
              >
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Inject } from "inversify-props";
import { Types } from "@/inversify.config.ts";
import IHealthServiceArea from "@/services/interfaces/IHealthServiceArea";
import { RequestStatus } from "@/models/RequestStatus";
import { Component } from "vue-property-decorator";

@Component
export default class HealthServiceAreaLookup extends Vue {
  @Inject(Types.HealthServiceAreaLookup)
  private lookupService!: IHealthServiceArea;

  isValid = false;
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
