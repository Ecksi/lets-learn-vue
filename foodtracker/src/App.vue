<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FoodCard />
  </div>
</template>

<script>
  import FoodCard from './components/organisms/FoodCard';

  export default {
    name: 'app',
    components: {
      FoodCard,
    }
  }
</script>

<style scoped>
  #app {
    text-align: center;
  }
</style>
