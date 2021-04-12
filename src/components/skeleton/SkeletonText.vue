<template>
  <div
    class="ion-padding custom-skeleton"
    v-for="i in no"
    :key="`skeleton-text-${i}`"
  >
    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
    <ion-skeleton-text animated></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 88%"></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 70%"></ion-skeleton-text>
    <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonSkeletonText } from "@ionic/vue";

export default defineComponent({
  props: {
    no: {
      type: Number,
      default: 1,
    },
  },
  components: {
    IonSkeletonText,
  },
  // setup(props, context) {},
});
</script>

<style scope>
/* Custom Skeleton Line Height and Margin */
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}
</style>
