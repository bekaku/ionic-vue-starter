<template>
  <base-layout page-title="I18n">
    <ion-grid>
      <ion-row>
        <ion-col>
          <h1>{{ WeeTranslate("welcome", ["Vue3"]) }}</h1>
          <button @click="count++">
            {{ WeeTranslate("count", { count }) }}
          </button>

          <p>Hello I18n</p>
          <form>
            <label>{{ WeeTranslate("language") }}</label>
            <select v-model="locale">
              <option value="en">en</option>
              <option value="th">th</option>
            </select>
          </form>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import useLocale from "@/composables/useLocale";
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
    const count = ref(0);
    // use local composer
    const { locale, WeeTranslate, SetLocale } = useLocale();
    console.log(
      "components > HelloI18n ",
      " Get Message",
      WeeTranslate("app.name"),
      WeeTranslate("count", { count: count.value })
    );
    // const { t, locale } = useI18n({
    //   // `locale` inherit from global composer
    //   inheritLocale: true,
    // });

    return { count, WeeTranslate, locale, SetLocale };
  },
});
</script>
