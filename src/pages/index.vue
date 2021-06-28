<template>
  <ion-page>
    <ion-content fullscreen class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col class="ion-text-center" style="margin-top : 50%">
            <ion-spinner name="lines" color="primary"></ion-spinner>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonSpinner,
  isPlatform,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";
import useLocale from "@/composables/useLocale";
import useBase from "@/composables/useBase";
import useAuth from "@/composables/useAuth";
export default defineComponent({
  components: {
    IonPage,
    IonContent,
    IonSpinner,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    const { tc } = useLocale();
    const { WeeGoTo } = useBase();
    const { CurrentAuth } = useAuth();
    if (CurrentAuth()) {
      setTimeout(() => {
        WeeGoTo("/tabs/", true);
      }, 500);
    } else {
      setTimeout(() => {
        WeeGoTo("/auth/login", true);
      }, 500);
    }
    return {
      isPlatform,
      tc,
    };
  },
});
</script>
