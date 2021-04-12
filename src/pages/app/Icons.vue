<template>
  <base-layout page-title="Icons">
    <ion-grid>
      <p>Dynamic import icon</p>
      <ion-row>
        <ion-col>
          <ion-icon :icon="heart"></ion-icon>
        </ion-col>
        <ion-col>
          <ion-icon :icon="airplaneOutline"></ion-icon>
        </ion-col>

        <ion-col>
          <ion-icon :ios="logoApple" :md="logoAndroid"></ion-icon>
        </ion-col>
      </ion-row>
      <p>Global Imports</p>
      <ion-row>
        <ion-col>
          <ion-icon name="arrow-down-outline"></ion-icon>
        </ion-col>
        <ion-col>
          <ion-icon name="people-circle-outline"></ion-icon>
        </ion-col>
        <ion-col>
          <ion-icon name="key-outline"></ion-icon>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonRow, IonCol, IonGrid, IonIcon } from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import {
  heart,
  airplaneOutline,
  logoAndroid,
  logoApple,
  arrowDownOutline,
  peopleCircleOutline,
  keyOutline,
} from "ionicons/icons";
import { addIcons } from "ionicons";
//Global Imports
addIcons({
  "arrow-down-outline": arrowDownOutline,
  "people-circle-outline": peopleCircleOutline,
  "key-outline": keyOutline,
});
export default defineComponent({
  components: {
    BaseLayout,
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
  },
  setup() {
    // Dynamic import icon
    return { heart, airplaneOutline, logoAndroid, logoApple };
  },
});
</script>
