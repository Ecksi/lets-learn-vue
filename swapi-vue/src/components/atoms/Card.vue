<template>
  <div class='card'>
    <h3>imagePH <span>AddFavorite</span></h3>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'Card'
  }
</script>

<style scoped lang='less'>
  .card {
    border: 2px solid black;
    height: 225px;
    margin-bottom: 30px;
  }
</style>