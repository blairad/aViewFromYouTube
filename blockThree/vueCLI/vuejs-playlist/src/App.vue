<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'First Vue file'
    }
  },
  methods: {
    greeting() {
      return 'hello'
    }
  }
}
</script>

<style>

</style>
