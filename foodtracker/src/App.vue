<template>
  <div id="app">
    <AppHeader />
    <FoodCard />
  </div>
</template>

<script>
  import AppHeader from './components/molecules/AppHeader';
  import FoodCard from './components/organisms/FoodCard';

  export default {
    name: 'app',
    components: {
      AppHeader,
      FoodCard,
    }
  }
</script>

<style scoped>
  #app {
    text-align: center;
  }
</style>
