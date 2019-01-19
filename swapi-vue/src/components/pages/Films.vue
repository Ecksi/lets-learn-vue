<template>
  <div>
    <h1>Films</h1>
  </div>
</template>

<script>
import getData from '@/js/getData';

  export default {
    name: 'Films',
    created() {
      getData('films')
    }
  }
</script>

<style scoped>

</style>