<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  useBackButton,
  useIonRouter,
} from "@ionic/vue";
import { defineComponent, onMounted } from "vue";
import useLocale from "@/composables/useLocale";
import useAppSetting from "@/composables/useAppSetting";
import { App } from "@capacitor/app";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const { initAppLocale } = useLocale();
    const { initAppTheme } = useAppSetting();
    const ionRouter = useIonRouter();

    // Hardware Back Button event
    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });

    onMounted(async () => {
      initAppTheme();
      initAppLocale();
    });
  },
});
</script>
