<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }, 
  data () {
    return {
        title: 'Vue Ninjas'
    }
  },
  methods: {
    changeTitle: function(){
      this.$emit('changeTitle', "Vue Wizards")
      // {(1)}  on the click we are firing this function. this refers to the component. on the click we are emiting upwards using the $emit. the event is called changeTitle and  the data we are sending with the event is a string of "Vue Wizards"
    }
  }
}
</script>

<style scoped>
header {
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}


</style>
