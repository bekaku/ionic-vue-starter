import { useStore } from "vuex";
import { computed } from "vue";
// import Cookies from "js-cookie";
import { useLocalStorage } from "@vueuse/core";
import { LocalStorageAtt, DefaultDarkMode } from "@/config/config";
export default () => {
  const store = useStore();

  const darkMode = computed(() => store.state.appSetting.darkMode);
  const initAppTheme = () => {
    // const darkMode = Cookies.get(LocalStorageAtt.DARK_MODE)
    //   ? Cookies.get(LocalStorageAtt.DARK_MODE) === "true"
    //   : DefaultDarkMode;
    const darkMode = useLocalStorage(
      LocalStorageAtt.DARK_MODE,
      JSON.stringify(DefaultDarkMode)
    );
    SetDarkMode(JSON.parse(darkMode.value));
  };
  const SetDarkMode = (isdark: boolean): void => {
    // Cookies.set(LocalStorageAtt.DARK_MODE, JSON.stringify(isdark), {
    //   expires: CookieExpire.Theme,
    // });
    localStorage.setItem(LocalStorageAtt.DARK_MODE, JSON.stringify(isdark));
    document.body.setAttribute("color-theme", isdark ? "dark" : "light");
    //add to appSetting store
    store.dispatch("appSetting/setDarkModeAction", isdark);
  };

  // access a state in computed function store.state.count
  const count = computed(() => store.state.appSetting.count);

  // access a getter in computed function store.getters.isMoreThanTen
  const isMoreThanTen = computed(
    () => store.getters["appSetting/isMoreThanTen"]
  );

  // access a mutation
  const increment = () => store.commit("appSetting/increment");
  // access an action
  const incrementAction = () => store.dispatch("appSetting/incrementAction");

  return {
    // count : computed(() => store.state.count)
    darkMode,
    SetDarkMode,
    count,
    isMoreThanTen,
    increment,
    incrementAction,
    initAppTheme,
  };
};
