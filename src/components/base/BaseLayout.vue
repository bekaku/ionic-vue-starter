<template>
  <ion-page>
    <ion-header>
      <slot name="toolbar">
        <ion-toolbar :color="toolbarColor">
          <div slot="start">
            <slot name="actions-start">
              <ion-back-button
                v-if="showBackLink"
                :text="backText"
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
    <ion-content
      :fullscreen="fullscreen"
      :scroll-y="scrollY"
      :class="contentPadding ? 'ion-padding' : ''"
    >
      <template v-if="collapse == 'condense'">
        <ion-header collapse="condense">
          <ion-toolbar :color="toolbarColor">
            <ion-title size="large">{{ pageTitle }}</ion-title>
          </ion-toolbar>
        </ion-header>
      </template>

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
import useLocale from "@/composables/useLocale";
export default defineComponent({
  //   props: ["pageTitle", "pageDefaultBackLink", ],
  props: {
    pageTitle: {
      type: String,
      default: "",
    },
    backText: {
      type: String,
      default: "",
    },
    toolbarColor: {
      type: String,
      default: undefined,
    },
    pageDefaultBackLink: {
      type: String,
      default: "",
    },
    collapse: {
      type: String,
      default: undefined, //condense
    },
    contentPadding: {
      type: Boolean,
      default: true,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    fullscreen: {
      type: Boolean,
      default: true,
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
    const { tc } = useLocale();
    return {
      isPlatform,
      tc,
    };
  },
});
</script>
