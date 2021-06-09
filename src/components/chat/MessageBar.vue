<template>
  <ion-row class="wee-messenger-lower-content">
    <ion-col class="ion-no-padding ion-no-margin">
      <ion-row>
        <ion-col :size="isTextFocus ? 2 : 5">
          <ion-grid>
            <ion-row class="ion-justify-content-center" style="padding-top:5px;">
              <template v-if="!isTextFocus">
                <ion-col size="3">
                  <div>
                    <ion-button fill="clear" size="small">
                      <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
                    </ion-button>
                  </div>
                </ion-col>
                <ion-col size="3">
                  <div>
                    <ion-button fill="clear" size="small">
                      <ion-icon
                        slot="icon-only"
                        :icon="happyOutline"
                      ></ion-icon>
                    </ion-button>
                  </div>
                </ion-col>
                <ion-col size="3">
                  <div>
                    <ion-button fill="clear" size="small">
                      <ion-icon
                        slot="icon-only"
                        :icon="cameraOutline"
                      ></ion-icon>
                    </ion-button>
                  </div>
                </ion-col>
                <ion-col size="3">
                  <div>
                    <ion-button fill="clear" size="small">
                      <ion-icon
                        slot="icon-only"
                        :icon="imageOutline"
                      ></ion-icon>
                    </ion-button>
                  </div>
                </ion-col>
              </template>
              <template v-else>
                <ion-col>
                   <div>
                  <ion-button
                    fill="clear"
                    size="small"
                    @click="isTextFocus = false"
                  >
                    <ion-icon
                      slot="icon-only"
                      :icon="chevronForwardOutline"
                    ></ion-icon>
                  </ion-button>
                   </div>
                </ion-col>
              </template>
            </ion-row>
          </ion-grid>
        </ion-col>
        <ion-col
          :size="isTextFocus ? 10 : 7"
        >

          <ion-row>
            <ion-col :size="isTextFocus ? 10 : 12">
              <ion-textarea
                @click="isTextFocus = true"
                rows="1"
                class="wee-messenger-inputarea"
                v-model="text"
                placeholder="Write a reply..."
              ></ion-textarea>
            </ion-col>
            <ion-col v-if="isTextFocus" size="2" style="padding-top:15px;">
              <ion-button fill="clear" size="small" @click="onSend">
                <ion-icon slot="icon-only" :icon="send"></ion-icon>
              </ion-button>
            </ion-col>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-col>
  </ion-row>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { IonRow, IonCol, IonButton, IonTextarea, IonIcon } from "@ionic/vue";
import {
  arrowDownOutline,
  arrowUpOutline,
  chevronForwardOutline,
  happyOutline,
  imageOutline,
  addOutline,
  send,
  cameraOutline,
} from "ionicons/icons";
export default defineComponent({
  props: {
    name: String,
  },
  components: {
    // BaseButton: defineAsyncComponent(() =>
    //   import("@/components/base/BaseButton.vue")
    // ),
    IonRow,
    IonCol,
    IonTextarea,
    IonButton,
    IonIcon,
  },
  setup(props, context) {
    const divRef = ref(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { attrs, emit, slots } = context;
    // console.log(context);
    const isTextFocus = ref(false);
    const text = ref("");
    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      // console.log("devRef", divRef.value); // <div>This is a root element</div>
    });

    const onSend = () => {
      emit("onSend", text.value);
      text.value = "";
    };

    const icons = {
      cameraOutline,
      arrowDownOutline,
      arrowUpOutline,
      chevronForwardOutline,
      happyOutline,
      imageOutline,
      addOutline,
      send,
    };
    return {
      divRef,
      ...icons,
      isTextFocus,
      onSend,
      text,
    };
  },
});
</script>
