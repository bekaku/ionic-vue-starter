import { createStore, createLogger } from "vuex";
import appSetting from "./modules/appSetting";
import appAuthen from "./modules/appAuthen";
const debug = process.env.NODE_ENV !== "production";
export default createStore({
  state: {
    // count: 1,
  },
  getters: {
    // getCount (state) {
    //   return state.count
    // }
  },
  mutations: {
    // increment(state) {
    // mutate state
    //   state.count++;
    // },
  },
  actions: {
    // incrementAction(context) {
    //   context.commit("increment");
    // },
  },
  modules: {
    appSetting,
    appAuthen,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
