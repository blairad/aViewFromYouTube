<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <!-- {(2)} on changeTitle is waiting here equivalent to the function of same name in header.vue. the $event is from the $emit from Hearder.vue this function is then ran in updateTitle below in the methods
    -->
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ninjas from "./components/Ninjas";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas,
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue", show: false },
        { name: "Ken", speciality: "React", show: false },
        { name: "Splinter", speciality: "Patience", show: false },
        { name: "Kung Fu Panda", speciality: "Eating", show: false },
        { name: "Hattori Hanzō", speciality: "Actual Ninja", show: false },
        { name: "Princess Mononoke", speciality: "Spirit", show: false },
      ],
      title: "Vue Ninjas"
    };
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
      // {(3)} as this methods is called it changes the state of the (title: "Vue Ninjas") to what it is in Header.vue and it passes the updated title to the app-header and app-footer changing both
    }
  }
};
</script>

<style></style>
