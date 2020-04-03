<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas> 
    <!-- ninjas component has the data from the Ninjas.vue -->
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'
//this is a local export global in main.js
export default {
  components: {
    'ninjas': Ninjas
  },
  data () {
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<style>

</style>
