<template>
  <div id='app'>
    <div id='nav'>
      <router-link to='/'>SwapiLogo</router-link> |
      <router-link to='/films'>Films</router-link> |
      <router-link to='/people'>People</router-link> |
      <router-link to='species'>Species</router-link> |
      <router-link to='/planets'>Planets</router-link> |
      <router-link to='/starships'>Starships</router-link> |
      <router-link to='vehicles'>Vehicles</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang='less'>
  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 5%;
  }
  .cards {
    width: 18%;
  }
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
</style>
