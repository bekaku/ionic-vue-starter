<template>
  <ion-page>
    <ion-tabs color="danger">
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" />
          <ion-label>{{ WeeTranslate("base.home") }}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="chatbubbleOutline" />
          <ion-label>{{ WeeTranslate("nav.chats") }}</ion-label>
          <ion-badge color="danger">22</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="ellipsisHorizontalOutline" />
          <ion-label>{{ WeeTranslate("base.other") }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import {
  homeOutline,
  chatbubbleOutline,
  ellipsisHorizontalOutline,
} from "ionicons/icons";
import useLocale from "@/composables/useLocale";
export default {
  name: "Tabs",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const { WeeTranslate } = useLocale();
    return {
      homeOutline,
      chatbubbleOutline,
      ellipsisHorizontalOutline,
      WeeTranslate,
    };
  },
};
</script>
