<template>
  <base-layout
    :page-title="tc('model_user')"
    fullscreen
    :content-padding="false"
  >
    <ion-row>
      <ion-col>
        <template v-if="!isFristLoad">
          <skeleton-list v-if="isLoading" :no="6"></skeleton-list>
        </template>
        <template v-else-if="userList.length > 0">
          <ion-list>
            <ion-list-header>
              {{ tc("model_user") }}
            </ion-list-header>

            <template
              v-for="(item, index) in userList"
              :key="`user-list-${index}`"
            >
              <ion-item detail="true">
                <ion-avatar slot="start">
                  <img :src="item.avatar" />
                </ion-avatar>
                <ion-label>
                  <h2>{{ `${item.first_name} ${item.last_name}` }}</h2>
                  <p>{{ item.email }}</p>
                </ion-label>
              </ion-item>
            </template>
          </ion-list>
          <ion-text v-if="!infinityLoad" class="ion-text-center wee-text-muted">
            <p>{{ tc("helper.nomoreData") }}</p>
          </ion-text>
          <template v-else-if="!isLoading">
            <ion-button fill="clear" expand="block" @click="loadData(undefined)"
              >Loadmore</ion-button
            >
          </template>

          <template v-if="isLoading">
            <div class="ion-text-center">
              <ion-spinner name="lines" color="primary"></ion-spinner>
            </div>
          </template>

          <ion-infinite-scroll
            @ionInfinite="loadData($event)"
            threshold="100px"
            id="infinite-scroll"
            :disabled="!infinityLoad"
          >
            <ion-infinite-scroll-content
              :loading-spinner="undefined"
              :loading-text="tc('base.pleaseWait')"
            >
            </ion-infinite-scroll-content>
          </ion-infinite-scroll>
        </template>
      </ion-col>
    </ion-row>
  </base-layout>
</template>

<script lang="ts">
import {
  IonRow,
  IonCol,
  IonList,
  IonListHeader,
  IonItem,
  IonAvatar,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonButton,
  IonSpinner,
} from "@ionic/vue";
import { defineComponent, defineAsyncComponent, onMounted, ref } from "vue";
import useLocale from "@/composables/useLocale";
// import useBase from "@/composables/useBase";
import MockService from "@/api/MockService";
import { ApiResponse } from "@/interface/Common";
import { User } from "@/interface/MockTypes";
export default defineComponent({
  name: "Tab2",
  components: {
    IonRow,
    IonCol,
    IonList,
    IonListHeader,
    IonItem,
    IonAvatar,
    IonLabel,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonButton,
    IonSpinner,
    BaseLayout: defineAsyncComponent(() =>
      import("@/components/base/BaseLayout.vue")
    ),
    SkeletonList: defineAsyncComponent(() =>
      import("@/components/skeleton/SkeletonList.vue")
    ),
  },
  setup() {
    // useBackButton(10, () => {
    //   console.log("UserList > useBackButton");
    // });


    const { tc } = useLocale();
    const mockService = new MockService();
    const page = ref<number>(1);
    const userList = ref<User[]>([]);
    // const { WeeLoading } = useBase();
    const isLoading = ref(false);
    const isFristLoad = ref(false);
    const infinityLoad = ref(true);
    onMounted(() => {
      fetchData();
    });

    const fetchData = async () => {
      // const loading = await WeeLoading();
      // loading.present();
      // loading.dismiss();
      isLoading.value = true;

      const res: ApiResponse = await mockService.getUserAll(page.value);
      isLoading.value = false;
      console.log("getUserAll", res);

      const { data } = res.response;
      if (!isFristLoad.value) {
        isFristLoad.value = true;
      }
      if (data && data.length > 0) {
        userList.value = userList.value?.concat(data);
      } else {
        infinityLoad.value = false;
      }
      return new Promise((resove) => {
        resove(true);
      });
    };
    const loadData = async (ev: any | undefined) => {
      if (infinityLoad.value) {
        page.value++;
        await fetchData();
      }
      if (ev != undefined && ev.target) {
        ev.target.complete();
      }
    };
    return {
      tc,
      userList,
      isLoading,
      isFristLoad,
      infinityLoad,
      loadData,
    };
  },
});
</script>
