<template>
  <div id="app">
    <h1>Component 1</h1>
    <textio></textio>
    <br>
    <br>
    <h1>Component 2</h1>
    <textio></textio>
  </div>
</template>

<script>
import textio from './components/textio.vue'

export default {
  name: 'App',
  components: {
    textio
  }
}
</script>

<style>
#app {
}
</style>
