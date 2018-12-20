<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <VoteCount voteType="👍" /> <!-- can i do type === '' ? 'someDefault' : validType -->
    <VoteCount voteType="👎" />
  </div>
</template>

<script>
import VoteCount from './components/VoteCount.vue'

export default {
  name: 'app',
  components: {
    VoteCount
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
