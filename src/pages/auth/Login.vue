<template>
  <ion-page>
    <ion-content fullscreen scroll-y class="ion-no-padding ion-no-margin">
      <div class="wee-login">
        <ion-grid class="ion-no-padding">
          <ion-row>
            <ion-col class="ion-text-center">
              <ion-img
                src="https://image.freepik.com/free-vector/organic-flat-world-bicycle-day-illustration_23-2148940202.jpg"
              ></ion-img>
            </ion-col>
          </ion-row>
          <ion-row class="ion-padding ion-margin-horizontal">
            <ion-col>
              <ion-text class="ion-margin-vertical">
                <h1 class="wee-fw-600">
                  {{ tc("authen.login") }}
                </h1>
                <p>Login to your account.</p>
              </ion-text>
              <ion-list>
                <ion-item
                  lines="full"
                  detail="false"
                  class="ion-margin-vertical"
                >
                  <ion-icon slot="start" :icon="personOutline"></ion-icon>
                  <ion-input
                    v-model="username"
                    :placeholder="tc('authen.username')"
                  ></ion-input>
                  <!-- <ion-label class="ion-text-wrap" position="stacked">
                    <ion-text color="danger">I'm a big deal</ion-text>
                  </ion-label> -->
                </ion-item>
                <ion-item
                  lines="full"
                  detail="false"
                  class="ion-margin-vertical"
                >
                  <ion-icon slot="start" :icon="keyOutline"></ion-icon>
                  <ion-input
                    :type="!showPassword ? 'password' : 'text'"
                    v-model="password"
                    :placeholder="tc('authen.password')"
                  ></ion-input>
                  <ion-button
                    slot="end"
                    fill="clear"
                    @click="showPassword = !showPassword"
                  >
                    <ion-icon
                      :icon="!showPassword ? eyeOutline : eyeOffOutline"
                    ></ion-icon>
                  </ion-button>
                </ion-item>
              </ion-list>
              <ion-button
                :disabled="!canSubmit"
                class="ion-margin-vertical"
                expand="block"
                @click="signin"
                >{{ tc("base.submit") }}
              </ion-button>
              <ion-button
                fill="clear"
                class="ion-margin-vertical"
                expand="block"
                size="small"
                >{{ tc("base.forgotPwd") }}
              </ion-button>
              <div class="ion-text-center wee-text-smaller">
                New to Ionic Starter ?
                <a href="javascript:void(0)">Register </a>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import {
  IonRow,
  IonCol,
  IonGrid,
  IonButton,
  IonPage,
  IonContent,
  IonIcon,
  IonText,
  IonList,
  IonItem,
  IonInput,
  IonImg,
  // IonLabel,
} from "@ionic/vue";
import {
  lockClosedOutline,
  personOutline,
  keyOutline,
  eyeOffOutline,
  eyeOutline,
} from "ionicons/icons";
import { UserCredential } from "@/interface/Common";
import useAuth from "@/composables/useAuth";
import useBase from "@/composables/useBase";
import useLocale from "@/composables/useLocale";
export default defineComponent({
  components: {
    IonRow,
    IonCol,
    IonGrid,
    IonButton,
    IonPage,
    IonContent,
    IonIcon,
    IonText,
    IonList,
    IonItem,
    IonInput,
    IonImg,
    // IonLabel,
  },
  setup() {
    const { SetAuth, CurrentAuth } = useAuth();
    const { WeeGoTo, WeeToast } = useBase();
    const { tc } = useLocale();
    const user = ref<UserCredential | null>();

    user.value = CurrentAuth();

    console.log("AuthUser > ", user.value);
    const username = ref("");
    const password = ref("");
    const showPassword = ref(false);
    const signin = () => {
      SetAuth({
        id: 1,
        username: "chanavee",
        email: "chanavee@gmail.com",
        status: true,
        rolesText: "Dev-Vee",
        picture: {
          path:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          x: "https://ionicframework.com/docs/demos/api/list/avatar-luke.png",
          xx: "https://ionicframework.com/docs/demos/api/list/avatar-luke.png",
          xxx: "https://ionicframework.com/docs/demos/api/list/avatar-luke.png",
        },
        userRoles: ["1"],
        apiKey:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsImtleSI6IjNiZDQ3Mzk0LWFkMTEtNTJhOC1iZmM0LWM4ZDkzYzk4MTY5NCIsImlhdCI6MTYxNjY2NDAyMywiZXhwIjoxNjE5MjU2MDIzfQ.2xxupPXG8XdZv_C6p8mht6-wKW5xOK5ufzJqtGd389c",
      });
      WeeToast(tc("success.loginSuccess"));
      setTimeout(() => {
        WeeGoTo("/tabs/", true);
      }, 500);
    };
    const canSubmit = computed(() => {
      const u: string = username.value;
      const p: string = password.value;
      if (!u || !p) {
        return false;
      }

      if (u.length >= 4 && p.length >= 4) {
        return true;
      }

      return false;
    });
    const icons = {
      lockClosedOutline,
      personOutline,
      keyOutline,
      eyeOffOutline,
      eyeOutline,
    };
    return {
      ...icons,
      SetAuth,
      signin,
      user,
      tc,
      username,
      password,
      showPassword,
      canSubmit
    };
  },
});
</script>
<style scoped>
@import "../../theme/login.css";
</style>
