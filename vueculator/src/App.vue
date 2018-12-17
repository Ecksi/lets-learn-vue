<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Vueculator/>
  </div>
</template>

<script>
import Vueculator from './components/Vueculator.vue'

export default {
  name: 'app',
  components: {
    Vueculator
  }
}
</script>

<style>
</style>

// fix sign -/+ working on zero.
// negative - number results in positive
// breakout into components
// dry - function operator(a, b, symbol) {
    a symbol b;
}
// pressing equal (after two numbers) twice gives NAN
// pressing equal w/ zero or one number gives typeError