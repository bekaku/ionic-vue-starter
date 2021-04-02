<template>
  <base-layout
    page-title="Tab2"
    fullscreen
    :show-back-link="false"
    collapse="condense"
    title-size="large"
  >
    <p>
      <ion-button @click="count++">
        Increment
      </ion-button>
    </p>
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
    const count = ref(0);
    
    return {
      count,
    };
  },
});
</script>
