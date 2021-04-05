// initial state
const state = {
  count: 0,
  locale: undefined,
  darkMode: false,
};

// getters
const getters = {
  isMoreThanTen(state: any) {
    return state.count > 10;
  },
};

// mutations
const mutations = {
  increment(state: any, no = 1) {
    state.count = state.count + no;
  },
  setLocale(state: any, lang: string) {
    state.locale = lang;
  },
  setDarkMode(state: any, isDark: boolean) {
    state.darkMode = isDark;
  },
};

// actions
const actions = {
  incrementAction(context: any, no = 1) {
    context.commit("increment", no);
  },
  setLocaleAction(context: any, lang: string) {
    context.commit("setLocale", lang);
  },
  setDarkModeAction(context: any, isDark: boolean) {
    context.commit("setDarkMode", isDark);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
