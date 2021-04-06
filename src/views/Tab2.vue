<template>
  <base-layout
    :page-title="WeeTranslate('nav.chats')"
    fullscreen
    :show-back-link="false"
    collapse="condense"
    title-size="large"
  >
    <div class="v-bg-white">
      <ion-button @click="count++">
        Increment
      </ion-button>
    </div>
    <p v-for="i in 100" :key="i">
      {{ `count = ${count}` }}
    </p>

    <ExploreContainer name="Tab 2 page" />

    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button color="primary" @click="WeeScrollToTop">
        <ion-icon :icon="arrowUpOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </base-layout>
</template>

<script lang="ts">
import { IonButton, IonFab, IonFabButton, IonIcon } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { defineComponent, defineAsyncComponent, ref } from "vue";
import { arrowUpOutline } from "ionicons/icons";
import useLocale from "@/composables/useLocale";
import useBase from "@/composables/useBase";
const BaseLayout = defineAsyncComponent(() =>
  import("@/components/base/BaseLayout.vue")
);

export default defineComponent({
  name: "Tab2",
  components: {
    ExploreContainer,
    IonButton,
    BaseLayout,
    IonFab,
    IonFabButton,
    IonIcon,
  },
  setup() {
    const { WeeScrollToTop } = useBase();
    const { WeeTranslate } = useLocale();
    const count = ref(0);

    return {
      count,
      WeeTranslate,
      arrowUpOutline,
      WeeScrollToTop,
    };
  },
});
</script>
