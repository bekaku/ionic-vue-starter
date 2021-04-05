<template>
  <base-layout
    :page-title="WeeTranslate('base.home')"
    fullscreen
    :show-back-link="false"
    :content-padding="false"
  >
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
    <!-- <ion-row>
      <ion-col>
        <p><router-link to="/i18n">I18n</router-link></p>
        <p><router-link to="/vuex">Vuex</router-link></p>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ExploreContainer @onSubmit="onEmit"></ExploreContainer>
      </ion-col>
    </ion-row> -->
    <ion-row>
      <ion-col>
        <ion-list>
          <ion-list-header>
            Ionic Starter Template
          </ion-list-header>
          <ion-item :detail="false">
            <ion-icon :icon="sunnyOutline" slot="start"></ion-icon>
            <ion-label> Dark mode {{ "dark : " + darkMode }} </ion-label>
            <ion-toggle
              @ionChange="SetDarkMode(!darkMode)"
              slot="end"
              :checked="darkMode"
            ></ion-toggle>
          </ion-item>

          <ion-item button @click="WeeGoTo('/i18n')" :detail="false">
            <ion-icon :icon="languageOutline" slot="start"></ion-icon>
            <ion-label>
              I18n
            </ion-label>
            <ion-text slot="end">
              {{ `Current ${localeStore}` }}
            </ion-text>
          </ion-item>
          <ion-item button @click="WeeGoTo('/vuex')">
            <ion-label>
              vuex
            </ion-label>
          </ion-item>

          <ion-item lines="none">
            <ion-label class="ion-text-wrap">
              <ion-text color="primary">
                <h3>H3 Primary Title</h3>
              </ion-text>
              <p>Paragraph line 1</p>
              <ion-text color="secondary">
                <p>Paragraph line 2 secondary</p>
              </ion-text>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-col>
    </ion-row>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted } from "vue";
import {
  IonIcon,
  IonButton,
  IonAvatar,
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonToggle,
} from "@ionic/vue";
import {
  phonePortraitOutline,
  ellipsisVertical,
  sunnyOutline,
  languageOutline,
} from "ionicons/icons";
import useLocale from "@/composables/useLocale";
import useBase from "@/composables/useBase";
import useAppSetting from "@/composables/useAppSetting";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

const BaseLayout = defineAsyncComponent(() =>
  import("@/components/base/BaseLayout.vue")
);
// const ExploreContainer = defineAsyncComponent(() =>
//   import("@/components/ExploreContainer.vue")
// );
export default defineComponent({
  name: "Tab1",
  components: {
    IonIcon,
    IonButton,
    BaseLayout,
    IonAvatar,
    IonRow,
    IonCol,
    // ExploreContainer,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonToggle,
  },

  setup(props, context) {
    const { WeeTranslate, localeStore } = useLocale();
    const { darkMode, SetDarkMode } = useAppSetting();
    const { WeeGoTo } = useBase();
    console.log("Tab1 > props", props, "context", context);
    const logDeviceInfo = async () => {
      const info = await Device.getInfo();
      console.log(info);
    };
    // const dark = ref(false);
    onMounted(() => {
      console.log("Tab 1 onMunted");
      logDeviceInfo();
    });

    // const setDark = () => {
    //   dark.value = !dark.value;
    //   document.body.setAttribute("color-theme", dark.value ? "dark" : "ligth");
    // };
    const onEmit = (from: string) => {
      console.log("onEmit", from);
    };

    return {
      phonePortraitOutline,
      ellipsisVertical,
      sunnyOutline,
      languageOutline,
      // dark,
      // setDark,
      onEmit,
      WeeTranslate,
      WeeGoTo,
      localeStore,
      darkMode,
      SetDarkMode,
    };
  },
});
</script>
