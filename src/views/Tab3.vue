<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ WeeTranslate("base.other") }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ WeeTranslate("base.other") }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <p v-for="i in 100" :key="i">
        {{ `count = ${i}` }}
      </p>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { defineComponent } from "vue";
import useLocale from "@/composables/useLocale";
export default defineComponent({
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  setup() {
    const { WeeTranslate } = useLocale();
    return {
      WeeTranslate,
    };
  },
});
</script>
