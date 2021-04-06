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
        <ion-icon slot="icon-only" name="ellipsis-vertical-outline"></ion-icon>
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
            <ion-icon
              :color="darkMode ? 'warning' : 'dark'"
              name="sunny-outline"
              slot="start"
            ></ion-icon>
            <ion-label> Dark mode {{ "dark : " + darkMode }} </ion-label>
            <ion-toggle
              @ionChange="SetDarkMode(!darkMode)"
              slot="end"
              :checked="darkMode"
            ></ion-toggle>
          </ion-item>

          <ion-item button @click="WeeGoTo('/i18n')" :detail="false">
            <ion-icon name="language-outline" slot="start"></ion-icon>
            <ion-label>
              I18n
            </ion-label>
            <ion-badge color="secondary" slot="end">
              {{ `Current ${localeStore}` }}
            </ion-badge>
          </ion-item>
          <ion-item button @click="WeeGoTo('/vuex')">
          <ion-icon name="briefcase-outline" slot="start"></ion-icon>
            <ion-label>
              vuex
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="phone-portrait-outline" slot="start"></ion-icon>
            <ion-label>Toast</ion-label>
            <ion-button
              fill="clear"
              @click="WeeToast(WeeTranslate('welcomeText'), 3000)"
              slot="end"
            >
              Show
            </ion-button>
          </ion-item>
          <ion-item>
            <ion-label>Confirm</ion-label>
            <ion-button
              fill="clear"
              @click="confirm()"
              slot="end"
              color="danger"
            >
              <ion-icon slot="start" name="trash-outline"></ion-icon>
              Delete
            </ion-button>
          </ion-item>
          <ion-item>
            <ion-label>Loading</ion-label>
            <ion-button fill="clear" @click="showLoading" slot="end"
              >Show loading</ion-button
            >
          </ion-item>

          <ion-list-header>
            Recent Conversations
          </ion-list-header>
          <ion-item @click="WeeGoTo('/chat')">
            <ion-avatar slot="start">
              <img src="https://avatars.githubusercontent.com/u/33171470?v=4" />
            </ion-avatar>
            <ion-label>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>
                Listen, I've had a pretty messed up day Listen, I've had a
                pretty messed up day Listen, I've had a pretty messed up day
                Listen, I've had a pretty messed up day
              </p>
            </ion-label>
            <ion-badge color="danger" slot="end">
              99+
            </ion-badge>
          </ion-item>

          <ion-item lines="none">
            <ion-label class="ion-text-wrap">
              <ion-text color="primary">
                <h2>H3 Primary Title</h2>
              </ion-text>
              <h3>Paragraph line 1</h3>
              <p>
                Paragraph line 2 secondary Paragraph line 2 secondaryParagraph
                line 2 secondaryParagraph line 2 secondaryParagraph line 2
                secondaryParagraph line 2 secondary
              </p>
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
  IonBadge,
  IonListHeader,
} from "@ionic/vue";
import useLocale from "@/composables/useLocale";
import useBase from "@/composables/useBase";
import useAppSetting from "@/composables/useAppSetting";
// import useIcon from "@/composables/useIcon";
import { Plugins } from "@capacitor/core";
const { Device } = Plugins;

// const BaseLayout = defineAsyncComponent(() =>
//   import("@/components/base/BaseLayout.vue")
// );
// const ExploreContainer = defineAsyncComponent(() =>
//   import("@/components/ExploreContainer.vue")
// );
export default defineComponent({
  name: "Tab1",
  components: {
    IonIcon,
    IonButton,
    BaseLayout: defineAsyncComponent(() =>
      import("@/components/base/BaseLayout.vue")
    ),
    IonAvatar,
    IonRow,
    IonCol,
    // ExploreContainer,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    IonToggle,
    IonBadge,
    IonListHeader,
  },

  setup(props, context) {
    const { WeeTranslate, localeStore } = useLocale();
    const { darkMode, SetDarkMode } = useAppSetting();
    const { WeeGoTo, WeeToast, WeeConfirm, WeeLoading } = useBase();
    // useIcon();
    console.log("Tab1 > props", props, "context", context);
    const logDeviceInfo = async () => {
      const info = await Device.getInfo();
      console.log(info);
    };
    // const dark = ref(false);
    onMounted(() => {
      console.log("Tab 1 onMunted");
      logDeviceInfo();

      // WeeIcon("add");
    });

    // const setDark = () => {
    //   dark.value = !dark.value;
    //   document.body.setAttribute("color-theme", dark.value ? "dark" : "ligth");
    // };
    const onEmit = (from: string) => {
      console.log("onEmit", from);
    };

    const confirm = async () => {
      const confirm = await WeeConfirm(
        WeeTranslate("app.monogram"),
        WeeTranslate("base.deleteConfirm")
      );
      WeeToast("Confirm > " + confirm);
    };
    const showLoading = async () => {
      const loading = await WeeLoading();
      loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 3000);
    };

    return {
      onEmit,
      WeeTranslate,
      WeeGoTo,
      localeStore,
      darkMode,
      SetDarkMode,
      WeeToast,
      confirm,
      showLoading,
    };
  },
});
</script>
