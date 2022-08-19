<template>
  <base-layout
    :page-title="tc('base.home')"
    fullscreen
    :show-back-link="false"
    :content-padding="false"
  >
    <template v-slot:actions-start>
      <ion-avatar style="height:35px;width:35px;">
        <img
          src="https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </ion-avatar>
    </template>
    <template v-slot:actions-end>
      <ion-button router-link="#">
        <ion-icon slot="icon-only" :icon="ellipsisVerticalOutline"></ion-icon>
      </ion-button>
    </template>
    <ion-row>
      <ion-col>
        <p>Dashboard Tab</p>
      </ion-col>
    </ion-row>

    <ion-card color="warning" class="action-card">
      <img
        class="header-img"
        src="https://images.pexels.com/photos/1314133/pexels-photo-1314133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />
      <ion-card-header>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        <ion-card-title>Card Title</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Here's a small text description for the card content. Nothing more,
        nothing less.
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button size="small">Action</ion-button>
            </ion-col>
            <ion-col>
              <ion-button fill="clear">
                <ion-icon slot="icon-only" :icon="heartOutline"></ion-icon>
              </ion-button>
              <ion-button fill="clear">
                <ion-icon
                  slot="icon-only"
                  :icon="shareSocialOutline"
                ></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>

    <ion-card>
      <img src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <ion-card-header>
        <ion-card-subtitle>Destination</ion-card-subtitle>
        <ion-card-title>Madison, WI</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        Founded in 1829 on an isthmus between Lake Monona and Lake Mendota,
        Madison was named the capital of the Wisconsin Territory in 1836.
      </ion-card-content>
    </ion-card>

    <ion-card class="apps-card">
      <ion-card-header>
        <ion-card-subtitle>Your Daily List</ion-card-subtitle>
        <ion-card-title>Ionic Apps We Think You'll Love.</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-thumbnail slot="start">
              <img
                src="https://ionic-docs-demo.herokuapp.com/assets/logo-sworkit.png"
              />
            </ion-thumbnail>
            <ion-label>
              <h3>Sworkit</h3>
              <p>The number one fitness app</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img
                src="https://ionic-docs-demo.herokuapp.com/assets/logo-untappd.png"
              />
            </ion-thumbnail>
            <ion-label>
              <h3>Untappd</h3>
              <p>Discover and share beer</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-thumbnail slot="start">
              <img
                src="https://ionic-docs-demo.herokuapp.com/assets/logo-shipt.png"
              />
            </ion-thumbnail>
            <ion-label>
              <h3>Shipt</h3>
              <p>Bring the store to your door</p>
            </ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-thumbnail slot="start">
              <img
                src="https://ionic-docs-demo.herokuapp.com/assets/logo-amtrak.png"
              />
            </ion-thumbnail>
            <ion-label>
              <h3>Amtrak</h3>
              <p>Book a trip today</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>

    <ion-card class="coworker-card">
      <img
        src="https://images.pexels.com/photos/4338015/pexels-photo-4338015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        class="header-img"
      />
      <ion-card-content>
        <ion-list lines="none">
          <ion-item>
            <ion-avatar slot="start">
              <img
                src="https://ionic-docs-demo.herokuapp.com/assets/card-coworker-avatar.png"
              />
            </ion-avatar>
            <ion-label>
              <h1>John Parks</h1>
              <p>Co-worker</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="callOutline" slot="start"></ion-icon>
            <ion-label>
              <h2>(555) 418-5602</h2>
              <p>Mobile phone</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="mailOutline" slot="start"></ion-icon>
            <ion-label>
              <h2>jparks@workmail.com</h2>
              <p>Work email</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="mailOutline" slot="start"></ion-icon>
            <ion-label>
              <h2>john.parks92@email.com</h2>
              <p>Personal email</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-card-content>
    </ion-card>
    <ion-card class="music-card">
      <ion-card-header>
        <img
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </ion-card-header>
      <ion-card-content text-center>
        <h2>29 #Strafford APTS</h2>
        <p>Bon Iver — 22, A Million</p>

        <ion-progress-bar value="{.25}"></ion-progress-bar>

        <ion-button color="dark" fill="clear" size="small">
          <ion-icon slot="icon-only" :icon="shuffleOutline"></ion-icon>
        </ion-button>
        <ion-button color="dark" fill="clear" size="large">
          <ion-icon slot="icon-only" :icon="playBackOutline"></ion-icon>
        </ion-button>
        <ion-button color="dark" fill="clear" class="button-largest">
          <ion-icon slot="icon-only" :icon="playOutline"></ion-icon>
        </ion-button>
        <ion-button color="dark" fill="clear" size="large">
          <ion-icon slot="icon-only" :icon="playForwardOutline"></ion-icon>
        </ion-button>
        <ion-button color="dark" fill="clear" size="small">
          <ion-icon slot="icon-only" :icon="repeatOutline"></ion-icon>
        </ion-button>
      </ion-card-content>
    </ion-card>
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
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/vue";
import useLocale from "@/composables/useLocale";
import { Device } from "@capacitor/device";
import {
  ellipsisVerticalOutline,
  shareSocialOutline,
  heartOutline,
  callOutline,
  mailOutline,
  shuffleOutline,
  playBackOutline,
  playOutline,
  playForwardOutline,
  repeatOutline,
} from "ionicons/icons";
export default defineComponent({
  name: "Tab1Page",
  components: {
    IonIcon,
    IonButton,
    BaseLayout: defineAsyncComponent(() =>
      import("@/components/base/BaseLayout.vue")
    ),
    IonAvatar,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel,
    IonItem,
    IonList,
  },

  setup(props, context) {
    const { tc } = useLocale();
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
    });

    const icons = {
      callOutline,
      mailOutline,
      shuffleOutline,
      playBackOutline,
      playOutline,
      playForwardOutline,
      repeatOutline,
      ellipsisVerticalOutline,
      shareSocialOutline,
      heartOutline,
    };
    return {
      tc,
      ...icons,
    };
  },
});
</script>
<style scoped>
@import "../../theme/card.css";
</style>
