<template>
  <ion-list>
    <ion-list-header v-if="showHeader">
      <ion-label>
        <ion-skeleton-text animated style="width: 20%"></ion-skeleton-text>
      </ion-label>
    </ion-list-header>

    <ion-item v-for="i in no" :key="`skeleton-list-${i}`">
      <ion-avatar slot="start" v-if="type == SkeletonTypeList.AVATAR">
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-avatar>
      <ion-thumbnail
        slot="start"
        v-else-if="type == SkeletonTypeList.THUMBNAIL"
      >
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-thumbnail>
      <ion-skeleton-text
        v-else
        animated
        :style="{ width: size + 'px', height: size + 'px' }"
        slot="start"
      ></ion-skeleton-text>

      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>

    <!-- <ion-item>
      <ion-thumbnail slot="start">
        <ion-skeleton-text animated></ion-skeleton-text>
      </ion-thumbnail>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item>

    <ion-item>
      <ion-skeleton-text
        animated
        style="width: 27px; height: 27px"
        slot="start"
      ></ion-skeleton-text>
      <ion-label>
        <h3>
          <ion-skeleton-text animated style="width: 50%"></ion-skeleton-text>
        </h3>
        <p>
          <ion-skeleton-text animated style="width: 80%"></ion-skeleton-text>
        </p>
        <p>
          <ion-skeleton-text animated style="width: 60%"></ion-skeleton-text>
        </p>
      </ion-label>
    </ion-item> -->
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IonSkeletonText } from "@ionic/vue";
import { SkeletonTypeList } from "@/interface/Common";
export default defineComponent({
  inheritAttrs: false,
  props: {
    no: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number || String,
      default: 24,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    type: {
      type: Object as PropType<SkeletonTypeList>,
      required: true,
      default: SkeletonTypeList.AVATAR,
    },
  },
  components: {
    IonSkeletonText,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, context) {
    return {
      SkeletonTypeList,
    };
  },
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
