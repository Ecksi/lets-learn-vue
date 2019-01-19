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

</style>
