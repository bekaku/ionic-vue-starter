<template>
  <div id="temp">
    <strong>{{ name }}</strong>
    <p>
      Explore
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://ionicframework.com/docs/components"
        >UI Components</a
      >
    </p>
    <div>
      <IonButton @click="$emit('onSubmit', 'from component btn')">
        emit to parent</IonButton
      ><br />
      <IonButton @click="emitToParent()">
        emit COMPOSITON API to parent
      </IonButton>
    </div>
    <div ref="divRef">This is a divRef element</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { IonButton } from "@ionic/vue";

export default defineComponent({
  props: {
    name: String,
  },
  components: {
    IonButton,
  },
  setup(props, context) {
    const divRef = ref(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { attrs, emit, slots } = context;
    // console.log(context);

    onMounted(() => {
      // the DOM element will be assigned to the ref after initial render
      // console.log("devRef", divRef.value); // <div>This is a root element</div>
    });

    const emitToParent = () => {
      emit("onSubmit", "from composition api");
    };

    return { emitToParent, divRef };
  },
});
</script>
