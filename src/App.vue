<template>
  <div id="app">
    <user name="Google开发者" :uid="4"></user>
  </div>
</template>

<script>
import user from './components/user'
export default {
  name: 'App',
  components: {
    user
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
