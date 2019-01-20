<template>
  <div class='home'>
    <h1>HomePageView</h1>
    <div class='routes'>
      <router-link class='route' to='/films'>Films</router-link>
      <router-link class='route' to='/people'>People</router-link>
      <router-link class='route' to='species'>Species</router-link>
      <router-link class='route' to='/planets'>Planets</router-link>
      <router-link class='route' to='/starships'>Starships</router-link>
      <router-link class='route' to='vehicles'>Vehicles</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style scoped lang="less">
  .routes {
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
  }
  .route {
    border: 1px solid black;
    margin: 10px auto;
    width: 33%;
  }
</style>
