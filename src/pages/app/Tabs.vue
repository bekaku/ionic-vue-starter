<template>
  <ion-page>
    <ion-tabs
      @ionTabsWillChange="beforeTabChange"
      @ionTabsDidChange="afterTabChange"
    >
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" />
          <ion-label>{{ tc("base.home") }}</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="chatbubbleOutline" />
          <ion-label>{{ tc("nav.chats") }}</ion-label>
          <ion-badge color="danger">22</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="ellipsisHorizontalOutline" />
          <ion-label>{{ tc("base.other") }}</ion-label>
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
    const { tc } = useLocale();
    const beforeTabChange = () => {
      // do something before tab change
      console.log("beforeTabChange");
    };
    const afterTabChange = () => {
      // do something after tab change
      console.log("afterTabChange");
    };
    return {
      homeOutline,
      chatbubbleOutline,
      ellipsisHorizontalOutline,
      tc,
      beforeTabChange,
      afterTabChange,
    };
  },
};
</script>
