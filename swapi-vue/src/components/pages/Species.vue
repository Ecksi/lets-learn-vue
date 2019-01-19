<template>
  <div>
    <h1>Species</h1>
  </div>
</template>

<script>
import getData from '@/js/getData';

  export default {
    name: 'Species',
    created() {
      getData('species')
    }
  }
</script>

<style scoped>

</style>