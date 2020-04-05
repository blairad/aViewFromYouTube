<template>
  <footer>
    <h2>{{ copyright }}  {{ title }}</h2>
  </footer>
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
        copyright: 'Net Ninja Tutorials:'
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
