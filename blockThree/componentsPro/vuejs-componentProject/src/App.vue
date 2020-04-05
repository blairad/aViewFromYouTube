<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
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
    };
  },
};
</script>

<style></style>
