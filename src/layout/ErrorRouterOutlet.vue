<template>
  <ion-router-outlet />
</template>

<script lang="ts">
import { IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    IonRouterOutlet,
  },
});
</script>
