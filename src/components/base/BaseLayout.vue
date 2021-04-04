<template>
  <ion-page>
    <ion-header>
      <slot name="toolbar">
        <ion-toolbar>
          <div slot="start">
            <slot name="actions-start">
              <ion-back-button
                v-if="showBackLink"
                text="bak"
                :default-href="pageDefaultBackLink"
              ></ion-back-button>
            </slot>
          </div>
          <ion-title :size="titleSize">{{ pageTitle }}</ion-title>
          <ion-buttons slot="end">
            <slot name="actions-end"></slot>
          </ion-buttons>
        </ion-toolbar>
      </slot>
    </ion-header>
    <ion-content :fullscreen="fullscreen" class="ion-padding">
      <ion-header v-if="collapse == 'condense'" collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  isPlatform,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  //   props: ["pageTitle", "pageDefaultBackLink", ],
  props: {
    pageTitle: {
      type: String,
      default: "",
    },
    pageDefaultBackLink: {
      type: String,
      default: "",
    },
    collapse: {
      type: String,
      default: undefined, //condense
    },
    fullscreen: {
      type: Boolean,
      default: false,
    },
    showBackLink: {
      type: Boolean,
      default: true,
    },
    titleSize: {
      type: String,
      default: undefined, //"large" | "small" | undefined
    },
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
  },
  setup() {
    return {
      isPlatform,
    };
  },
});
</script>
