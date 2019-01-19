<template>
  <div>
    <h1>Starships</h1>
  </div>
</template>

<script>
import getData from '@/js/getData';

  export default {
    name: 'Starships',
    created() {
      getData('starships')
    }
  }
</script>

<style scoped>

</style>