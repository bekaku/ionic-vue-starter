<template>
  <base-layout page-title="Home" fullscreen :show-back-link="false">
    <template v-slot:actions-start>
      <ion-avatar style="height:35px;width:35px;">
        <img src="https://avatars.githubusercontent.com/u/33171470?v=4" />
      </ion-avatar>
    </template>
    <template v-slot:actions-end>
      <ion-button router-link="#">
        <ion-icon slot="icon-only" :icon="ellipsisVertical"></ion-icon>
      </ion-button>
    </template>
    <ion-row>
      <ion-col size="9">
        <ion-button
          expand="block"
          color="danger"
          shape="round"
          router-link="/error404"
        >
          Test
        </ion-button>
      </ion-col>
      <ion-col size="3">
        <ion-icon
          color="danger"
          size="large"
          :icon="phonePortraitOutline"
        ></ion-icon>
        <router-link to="/vuex">Vuex</router-link>
      </ion-col>
    </ion-row>
    <p>
      <ion-button @click="setDark">
        Test
      </ion-button>
    </p>
    <p>{{ "dark : " + dark }}</p>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted, ref } from "vue";
import { IonIcon, IonButton, IonAvatar, IonRow, IonCol } from "@ionic/vue";
import { phonePortraitOutline, ellipsisVertical } from "ionicons/icons";
const BaseLayout = defineAsyncComponent(() =>
  import("@/components/base/BaseLayout.vue")
);
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;
export default defineComponent({
  name: "Tab1",
  components: {
    IonIcon,
    IonButton,
    BaseLayout,
    IonAvatar,
    IonRow,
    IonCol,
  },

  setup() {
    const logDeviceInfo = async () => {
      const info = await Device.getInfo();
      console.log(info);
    };
    const dark = ref(false);
    onMounted(() => {
      console.log("Tab 1 onMunted");
      logDeviceInfo();

      const prefersColor = window.matchMedia("(prefers-color-scheme: dark)");
      dark.value = prefersColor.matches;

      // prefersColor.addEventListener("change", (mediaQuery) => {
      //   dark.value = mediaQuery.matches;
      //   this.updateDarkMode();
      // });
    });

    const setDark = () => {
      dark.value = !dark.value;
      document.body.classList.toggle("dark", dark.value);
    };

    return {
      phonePortraitOutline,
      ellipsisVertical,
      dark,
      setDark,
    };
  },
});
</script>
