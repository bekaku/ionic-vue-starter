<template>
  <!-- <base-layout page-title="Vuex"> -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            default-href="/tabs/tab1"
            :text="WeeTranslate('base.back')"
          ></ion-back-button>
        </ion-buttons>
        <ion-title>Scroll</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content ref="contentscroll">
      <ion-grid>
        <ion-row>
          <ion-col>
            <h1>Scroll to top and bottom</h1>
            <p v-for="i in 100" :key="i">
              {{ `No. ${i}` }}
            </p>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button color="primary" @click="scrollToBottom">
          <ion-icon name="arrow-down-outline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button color="primary" @click="scrollToTop">
          <ion-icon name="arrow-up-outline"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
  <!-- </base-layout> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useAppSetting from "@/composables/useAppSetting";
import {
  IonRow,
  IonCol,
  IonGrid,
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonBackButton,
} from "@ionic/vue";
// import BaseLayout from "@/components/base/BaseLayout.vue";
import useBase from "@/composables/useBase";
import useLocale from "@/composables/useLocale";
export default defineComponent({
  name: "Vuex",
  components: {
    // BaseLayout,
    IonRow,
    IonCol,
    IonGrid,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
  },
  setup() {
    const { WeeScrollToTop } = useBase();
    const { WeeTranslate } = useLocale();
    const contentscroll = ref();
    const {
      count,
      isMoreThanTen,
      increment,
      incrementAction,
    } = useAppSetting();

    return {
      count,
      isMoreThanTen,
      increment,
      incrementAction,
      WeeScrollToTop,
      contentscroll,
      WeeTranslate,
      scrollToTop: () => contentscroll.value.$el.scrollToTop(500),
      scrollToBottom: () => contentscroll.value.$el.scrollToBottom(500),
    };
  },
});
</script>
