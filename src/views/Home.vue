<template>
  <base-layout page-title="Home">
    <div>
      <router-link to="/tabs/">Home</router-link> |
      <router-link to="/i18n/en?chageLocale=true">I18n</router-link> |
      <router-link to="/auth">Auth</router-link> |
      <router-link to="/vuex">Vuex</router-link>
    </div>
  </base-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "@/components/base/BaseLayout.vue";
export default defineComponent({
  components: {
    BaseLayout,
  },
});
</script>
