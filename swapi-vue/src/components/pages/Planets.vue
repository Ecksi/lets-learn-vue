<template>
  <div>
    <h1>Planets</h1>
  </div>
</template>

<script>
import getData from '@/js/getData';

  export default {
    name: 'Planets',
    created() {
      getData('planets')
    }
  }
</script>

<style scoped>

</style>