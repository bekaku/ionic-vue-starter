<template>
  <!-- <base-layout page-title="Vuex"> -->
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
          <ion-avatar style="height:35px;width:35px;">
            <img src="https://avatars.githubusercontent.com/u/33171470?v=4" />
          </ion-avatar>
        </ion-buttons>
        <ion-title>Bekaku</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen ref="contentsChatcroll">
      <ion-grid>
        <ion-row>
          <ion-col class="ion-no-padding ion-no-margin" style="padding-bottom:100px;">
            <section class="msger" v-for="item in 15" :key="item">
              <main fullscreen class="msger-chat">
                <div class="msg left-msg">
                  <div class="msg-img">
                    <ion-avatar style="height:35px;width:35px;">
                      <img
                        src="https://avatars.githubusercontent.com/u/33171470?v=4"
                      />
                    </ion-avatar>
                  </div>

                  <div class="msg-bubble">
                    <div class="msg-info">
                      <div class="msg-info-name">BOT</div>
                      <div class="msg-info-time">12:45</div>
                    </div>

                    <div class="msg-text ion-text-wrap">
                      Hi, welcome to SimpleChat! Go ahead and send me a message.
                      😄
                    </div>
                  </div>
                </div>

                <div class="msg right-msg">
                  <!-- <div class="msg-img">
                    <ion-avatar style="height:35px;width:35px;">
                      <img
                        src="https://avatars.githubusercontent.com/u/33171470?v=4"
                      />
                    </ion-avatar>
                  </div> -->

                  <div class="msg-bubble">
                    <div class="msg-info">
                      <div class="msg-info-name">Sajad</div>
                      <div class="msg-info-time">12:46</div>
                    </div>

                    <div class="msg-text ion-text-wrap">
                      You can change your name in JS section!
                    </div>
                  </div>
                </div>
              </main>
            </section>
          </ion-col>
        </ion-row>
        <ion-row class="lower-content">
          <ion-col class="ion-no-padding ion-no-margin">
            <div>
              <form class="msger-inputarea">
                <input
                  type="text"
                  class="msger-input"
                  placeholder="Enter your message..."
                />
                <button type="submit" class="msger-send-btn">Send</button>
              </form>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
  <!-- </base-layout> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonRow,
  IonCol,
  IonGrid,
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonBackButton,
  IonAvatar,
} from "@ionic/vue";
// import BaseLayout from "@/components/base/BaseLayout.vue";
import { arrowDownOutline, arrowUpOutline } from "ionicons/icons";
import useLocale from "@/composables/useLocale";
export default defineComponent({
  name: "Vuex",
  components: {
    // BaseButton: defineAsyncComponent(() =>
    //   import("@/components/base/BaseButton.vue")
    // ),
    IonRow,
    IonCol,
    IonGrid,
    IonPage,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonAvatar,
  },
  setup() {
    const { WeeTranslate } = useLocale();
    const contentsChatcroll = ref();
    const onClick = () => {
      console.log("onClick");
    };
    return {
      WeeTranslate,
      arrowUpOutline,
      arrowDownOutline,
      scrollToTop: () => contentsChatcroll.value.$el.scrollToTop(500),
      scrollToBottom: () => contentsChatcroll.value.$el.scrollToBottom(500),
      onClick,
    };
  },
});
</script>
<style scoped>
/* https://codepen.io/sajadhsm/pen/odaBdd */
@import "../../theme/chat.css";
</style>
