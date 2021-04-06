import { useRouter, useRoute } from "vue-router";
import {
  toastController,
  alertController,
  loadingController,
} from "@ionic/vue";
import useLocale from "@/composables/useLocale";
import { ref } from "vue";
export default (): any => {
  const route = useRoute();
  const router = useRouter();
  const { WeeTranslate } = useLocale();
  const appProcessing = ref(false);
  //   console.log("HelloI18n > route Params", route.params, route.query); // fullPath ,  hash, meta, params, path, query, redirectedFrom
  const WeeGetParam = (field: string): any => {
    if (!field) {
      return;
    }
    return route.params ? route.params[field] : null;
  };
  const WeeGetQuery = (field: string): any => {
    if (!field) {
      return;
    }
    return route.query ? route.query[field] : null;
  };
  const WeeGoTo = (link: string, replace?: boolean): void => {
    if (!link) {
      return;
    }
    if (!replace) {
      router.push(link);
    } else {
      // window.location.replace(link);
      router.replace({ path: link });
    }
  };
  const getIonContent = () => {
    return document.querySelector("ion-content");
  };

  const WeeScrollToBottom = () => {
    const content = getIonContent();
    if (!content) {
      return;
    }
    content.scrollToBottom(500);
  };

  const WeeScrollToTop = () => {
    const content = getIonContent();
    console.log("WeeScrollToTop", content);
    if (!content) {
      return;
    }
    content.scrollToTop(500);
  };
  const WeeToast = async (
    text: string,
    time = 2000,
    headerText?: string,
    toastPosition: "bottom" | "top" | "middle" | undefined = "bottom"
  ) => {
    const toast = await toastController.create({
      header: headerText ? headerText : "",
      message: text,
      duration: time,
      position: toastPosition,
      buttons: [
        {
          side: "end",
          text: WeeTranslate("base.close"),
        },
      ],
    });
    return toast.present();
  };

  /**
   * 
   * @param confirmHeader 
   * @param text 
   * @returns 
   *   const confirm = await WeeConfirm(
        WeeTranslate("app.monogram"),
        WeeTranslate("base.deleteConfirm")
      );
   */
  const WeeConfirm = async (confirmHeader: string, text: string) => {
    return new Promise((resolve) => {
      alertController
        .create({
          header: confirmHeader,
          message: text, //Message <strong>text</strong>!!!
          buttons: [
            {
              text: WeeTranslate("base.cancel"),
              handler: () => resolve(false),
            },
            {
              text: WeeTranslate("base.submit"),
              handler: () => resolve(true),
            },
          ],
        })
        .then((alert) => {
          alert.present();
        });
    });
  };

  /**
   * 
   * @param text 
   * @param spinnerType 
   * @returns 
   *  const loading = await WeeLoading();
      loading.present();
      loading.dismiss();
   */
  const WeeLoading = async (text?: string, spinnerType?: any) => {
    const loading = await loadingController.create({
      cssClass: "my-custom-class",
      message: text ? text : WeeTranslate("base.pleaseWait"),
      // duration: 3000,
      spinner: spinnerType ? spinnerType : "lines", //bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined
    });
    return new Promise((resolve) => {
      resolve(loading);
    });
  };

  return {
    WeeGetParam,
    WeeGetQuery,
    WeeGoTo,
    WeeToast,
    WeeConfirm,
    WeeScrollToBottom,
    WeeScrollToTop,
    appProcessing,
    WeeLoading,
  };
};
