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
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <p><router-link to="/i18n">I18n</router-link></p>
        <p><router-link to="/vuex">Vuex</router-link></p>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-button @click="setDark">
          Toggle Dark mode
        </ion-button>
        <p>{{ "dark : " + dark }}</p>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ExploreContainer @onSubmit="onEmit"></ExploreContainer>
      </ion-col>
    </ion-row>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted, ref } from "vue";
import { IonIcon, IonButton, IonAvatar, IonRow, IonCol } from "@ionic/vue";
import { phonePortraitOutline, ellipsisVertical } from "ionicons/icons";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

const BaseLayout = defineAsyncComponent(() =>
  import("@/components/base/BaseLayout.vue")
);
const ExploreContainer = defineAsyncComponent(() =>
  import("@/components/ExploreContainer.vue")
);
export default defineComponent({
  name: "Tab1",
  components: {
    IonIcon,
    IonButton,
    BaseLayout,
    IonAvatar,
    IonRow,
    IonCol,
    ExploreContainer,
  },

  setup(props, context) {
    console.log("Tab1 > props", props, "context", context);
    const logDeviceInfo = async () => {
      const info = await Device.getInfo();
      console.log(info);
    };
    const dark = ref(false);
    onMounted(() => {
      console.log("Tab 1 onMunted");
      logDeviceInfo();
    });

    const setDark = () => {
      dark.value = !dark.value;
      document.body.setAttribute("color-theme", dark.value ? "dark" : "ligth");
    };
    const onEmit = (from: string) => {
      console.log("onEmit", from);
    };

    return {
      phonePortraitOutline,
      ellipsisVertical,
      dark,
      setDark,
      onEmit,
    };
  },
});
</script>
