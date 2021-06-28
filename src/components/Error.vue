<template>
  <ion-grid>
    <ion-row class="ion-justify-content-center">
      <ion-col>
        <div class="ion-text-center on-text-wrap">
          <h1 v-if="error" class="ion-padding-vertical wee-fw-600">
            {{ tc("error.error") }}
          </h1>
          <template v-if="showImage">
            <img
              v-if="error"
              class="ion-padding-vertical"
              :src="require('@/assets/robot-sad.png')"
              style="width:50%"
            />
            <img
              v-else
              class="ion-padding-vertical"
              :src="require('@/assets/robot.png')"
              style="width:50%"
            />
          </template>
          <template v-else>
            <ion-icon
              :color="error ? 'danger' : 'medium'"
              :icon="error ? alertCircle : fileTray"
            ></ion-icon>
          </template>

          <p class="wee-text-muted">
            {{ text ? text : tc("error.dataNotfound") }}
          </p>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonRow, IonCol, IonGrid, IonIcon } from "@ionic/vue";
import useLocale from "@/composables/useLocale";
import { fileTray, alertCircle } from "ionicons/icons";
export default defineComponent({
  props: {
    error: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "",
    },
    showImage: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  components: {
    IonRow,
    IonCol,
    IonGrid,
    IonIcon,
  },
  setup() {
    const { tc } = useLocale();
    return {
      tc,
      fileTray,
      alertCircle
    };
  },
});
</script>
<style scoped>
ion-icon {
  font-size: 128px;
}
</style>
