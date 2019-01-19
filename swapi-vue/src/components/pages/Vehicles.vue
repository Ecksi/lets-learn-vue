<template>
  <div>
    <h1>Vehicles</h1>
  </div>
</template>

<script>
import getData from '@/js/getData';

  export default {
    name: 'Vehicles',
    created() {
      getData('vehicles')
    }
  }
</script>

<style scoped>

</style>