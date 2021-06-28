<template>
  <base-layout
    :page-title="tc('base.home')"
    fullscreen
    :show-back-link="false"
    :content-padding="true"
  >
    <template v-slot:actions-start>
      <ion-avatar style="height:35px;width:35px;">
        <img src="https://images.pexels.com/photos/1105191/pexels-photo-1105191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
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
  </base-layout>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, onMounted } from "vue";
import { IonIcon, IonButton, IonAvatar, IonRow, IonCol } from "@ionic/vue";
import useLocale from "@/composables/useLocale";
import { Device } from "@capacitor/device";
import { ellipsisVerticalOutline } from "ionicons/icons";
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

    return {
      tc,
      ellipsisVerticalOutline,
    };
  },
});
</script>
