<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <VoteCount voteType="👍" />
    <VoteCount voteType="👎" />
  </div>
</template>

<script>
import VoteCount from './components/atoms/VoteCount.vue'

export default {
  name: 'app',
  components: {
    VoteCount
  }
}
</script>

<style scoped>
  #app {
    text-align: center;
  }
</style>
