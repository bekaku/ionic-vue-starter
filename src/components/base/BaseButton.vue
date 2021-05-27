<template>
  <ion-button v-bind="$attrs">
    <slot />
  </ion-button>
</template>

<script lang="ts">
import { IonButton } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { IonButton },
});
</script>
