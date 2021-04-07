// import * as allIcons from "ionicons/icons";
// import { add, trashOutline, homeOutline } from "ionicons/icons";
// import { addIcons } from "ionicons";
// import _ from "lodash";
// import { ref } from "vue";
//https://github.com/ModusCreateOrg/ionic-vue/issues/120

/**
 * 1. Add all required icons globally
  // main.js
  import { addIcons } from 'ionicons'
  import { add } from 'ionicons/icons'
  addIcons({ add })

  // your component
  <ion-icon name="add"></ion-icon>

  2. Set icon to imported value
  <template>
    <ion-icon :icon="add"></ion-icon>
    <ion-icon :icon="homeOutline"></ion-icon>
  </template>

  <script>
  import { add, homeOutline } from 'ionicons/icons'

  export default {
   setup() {
      return { add, homeOutline };
    }
  }
  </script>

  3. Add icons on a need-to-need basis
  <template>
    <ion-icon name="add"></ion-icon>
  </template>

  <script>
  import { addIcons } from 'ionicons'
  import { add } from 'ionicons/icons'
  addIcons({ add })

  export default {
    ...
  }
  </script>
 */
import {
  add,
  trashOutline,
  homeOutline,
  chatbubbleOutline,
  ellipsisHorizontalOutline,
  menuOutline,
  phonePortraitOutline,
  languageOutline,
  sunnyOutline,
  ellipsisVerticalOutline,
  briefcaseOutline,
  arrowUpOutline,
  arrowDownOutline,
  peopleCircleOutline,
} from "ionicons/icons";
import { addIcons } from "ionicons";
export default () => {
  addIcons({
    add,
    "trash-outline": trashOutline,
    "home-outline": homeOutline,
    "chatbubble-outline": chatbubbleOutline,
    "ellipsis-horizontal-outline": ellipsisHorizontalOutline,
    "menu-outline": menuOutline,
    "phone-portrait-outline": phonePortraitOutline,
    "language-outline": languageOutline,
    "sunny-outline": sunnyOutline,
    "ellipsis-vertical-outline": ellipsisVerticalOutline,
    "briefcase-outline": briefcaseOutline,
    "arrow-up-outline": arrowUpOutline,
    "arrow-down-outline": arrowDownOutline,
    "people-circle-outline": peopleCircleOutline,
  });
  // addIcons(_.mapKeys(allIcons, (value, key) => _.kebabCase(key)));
};
