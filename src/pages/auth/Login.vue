<template>
  <base-layout page-title="Login" :show-backLink="false">
    <ion-grid>
      <ion-row>
        <ion-col>
          <h1>Auth</h1>
          <p>
            {{ user ? user.email : "" }}
          </p>
          <IonButton @click="signin">Signin</IonButton>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { IonRow, IonCol, IonGrid, IonButton } from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
import { UserCredential } from "@/interface/Common";
import useAuth from "@/composables/useAuth";
import useBase from "@/composables/useBase";
import useLocale from "@/composables/useLocale";
export default defineComponent({
  components: {
    BaseLayout,
    IonRow,
    IonCol,
    IonGrid,
    IonButton,
  },
  setup() {
    const { SetAuth, CurrentAuth } = useAuth();
    const { WeeGoTo, WeeToast } = useBase();
    const { WeeTranslate } = useLocale();
    const user = ref<UserCredential | null>();

    user.value = CurrentAuth();

    console.log("AuthUser > ", user.value);

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
      WeeToast(WeeTranslate("success.loginSuccess"));
      setTimeout(() => {
        WeeGoTo("/tabs/", true);
      }, 500);
    };
    return {
      SetAuth,
      signin,
      user,
    };
  },
});
</script>
