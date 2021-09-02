<template>
  <div class="wrapper">
   <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '生活一线通'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .wrapper {
    text-align: center;
    color: red;
  }
</style>
