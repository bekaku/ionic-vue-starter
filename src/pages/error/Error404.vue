<template>
  <base-layout page-title="Error" fullscreen :scroll-y="false" :show-back-link="false">
    <ion-grid>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <div class="ion-text-center on-text-wrap">
            <h1 class="ion-padding-vertical wee-fw-600">
              Error 404
            </h1>
            <img class="ion-padding-vertical" :src="require('@/assets/robot-sad.png')" style="width:50%" />
            <p class="wee-text-muted">{{ WeeTranslate("error.404") }}</p>
            <ion-button fill="clear" href="/">{{ WeeTranslate("base.back") }}</ion-button>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonRow, IonCol, IonGrid, IonButton } from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import useLocale from "@/composables/useLocale";
export default defineComponent({
  components: {
    BaseLayout,
    IonRow,
    IonCol,
    IonGrid,
    IonButton
  },
  setup() {
    const { WeeTranslate } = useLocale();

    return {
      WeeTranslate,
    };
  },
});
</script>
