<template>
  <base-layout page-title="Vuex">
    <ion-grid>
      <ion-row>
        <ion-col>
          <h1>Vuex</h1>
          <p>
            {{ `Count : ${count}` }}
          </p>
          <p>
            {{ `isMoreThanTen : ${isMoreThanTen}` }}
          </p>
          <p><button @click="increment">Increment Mutation</button></p>
          <p><button @click="incrementAction">Increment Action</button></p>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useAppSetting from "@/composables/useAppSetting";
import { IonRow, IonCol, IonGrid } from "@ionic/vue";
import BaseLayout from "@/components/base/BaseLayout.vue";

export default defineComponent({
  components: {
    BaseLayout,
    IonRow,
    IonCol,
    IonGrid,
  },
  setup() {
    const {
      count,
      isMoreThanTen,
      increment,
      incrementAction,
    } = useAppSetting();

    return { count, isMoreThanTen, increment, incrementAction };
  },
});
</script>
