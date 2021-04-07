<template>
  <base-layout page-title="UserList" fullscreen>
    <ion-grid>
      <ion-row>
        <ion-col> 

          <p>{{userList}}</p>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script lang="ts">
import { IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent, defineAsyncComponent, onMounted, ref } from "vue";
import useLocale from "@/composables/useLocale";
import useBase from "@/composables/useBase";
import MockService from "@/api/MockService";
import { ApiResponse } from "@/interface/Common";
import { User } from "@/interface/MockTypes";
export default defineComponent({
  name: "Tab2",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    BaseLayout: defineAsyncComponent(() =>
      import("@/components/base/BaseLayout.vue")
    ),
  },
  setup() {
    const { WeeTranslate } = useLocale();
    const mockService = new MockService();
    const page = ref<number>(1);
    const userList = ref<User[]>();
    const { WeeLoading } = useBase();
    onMounted(() => {
      fetchData();
    });

    const fetchData = async () => {
      const loading = await WeeLoading();
      loading.present();
      const res: ApiResponse = await mockService.getUserAll(page.value);
      loading.dismiss();

      if (res.response) {
        userList.value = res.response;
      }
      console.log("getUserAll", res);
    };

    return {
      WeeTranslate,
      userList,
    };
  },
});
</script>
