<template>
  <footer>
    <h2>{{ title }}</h2>
  </footer>
</template>

<script>


export default {
  components: {
    
  },
  data () {
    return {
        title: 'Footer'
    }
  }
}
</script>

<style scoped>

footer{
    background: #222;
    padding: 6px;
    
}
h2{
    color: mediumvioletred;
    text-align: center;
}



</style>
