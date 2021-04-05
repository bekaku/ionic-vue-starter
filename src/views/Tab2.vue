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
  </base-layout>
</template>

<script lang="ts">
import { IonButton } from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
import { defineComponent, defineAsyncComponent, ref } from "vue";
import useLocale from "@/composables/useLocale";
const BaseLayout = defineAsyncComponent(() =>
  import("@/components/base/BaseLayout.vue")
);

export default defineComponent({
  name: "Tab2",
  components: {
    ExploreContainer,
    IonButton,
    BaseLayout,
  },
  setup() {
    const { WeeTranslate } = useLocale();
    const count = ref(0);

    return {
      count,
      WeeTranslate,
    };
  },
});
</script>
