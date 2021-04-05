<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent, onMounted } from "vue";
import useLocale from "@/composables/useLocale";
import useAppSetting from "@/composables/useAppSetting";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    const { initAppLocale } = useLocale();
    const { initAppTheme } = useAppSetting();
    onMounted(() => {
      initAppTheme();
      initAppLocale();
    });
  },
});
</script>
