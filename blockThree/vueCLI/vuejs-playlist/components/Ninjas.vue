<template>
  <div>
    <h1>List of ninjas</h1>
    <ul>
      <li v-for="(ninja, index) in ninjas" v-bind:key="index">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Bowser", "Ryu", "Ken"],
    };
  },
};
</script>


<style scoped>

h1{
  color:bisque
  }

</style>
