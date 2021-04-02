<template>
  <base-layout page-title="Error404">
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <div class="ion-text-center">
            <h1>404 Notfoud</h1>
            <ion-img
              :src="require('@/assets/robot.png')"
              style="width:50%"
            ></ion-img>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonImg, IonRow, IonCol, IonGrid } from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import { add } from "ionicons/icons";
export default defineComponent({
  components: {
    IonImg,
    BaseLayout,
    IonRow,
    IonCol,
    IonGrid,
  },
  setup() {
    return {
      add,
    };
  },
});
</script>
