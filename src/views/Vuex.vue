<template>
  <!-- <base-layout page-title="Vuex"> -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
           <ion-back-button></ion-back-button>
        </ion-buttons>
        <IonTitle>Vuex</IonTitle>
      </ion-toolbar>
    </ion-header>
    <ion-content ref="contentwee">
      <ion-grid>
        <ion-row>
          <ion-col>
            <h1>Vuex</h1>
            <p>
              {{ `Count : ${count}` }}
            </p>
            <p>
              {{ `isMoreThanTen : ${isMoreThanTen}` }}
            </p>
            <p><button @click="increment">Increment Mutation</button></p>
            <p><button @click="incrementAction">Increment Action</button></p>
            <p v-for="i in 100" :key="i">
              {{ `count = ${i}` }}
            </p>
          </ion-col>
        </ion-row>
      </ion-grid>
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
    const contentwee = ref();
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
      contentwee,
      scrollToTop: () => contentwee.value.$el.scrollToTop(500),
    };
  },
});
</script>
