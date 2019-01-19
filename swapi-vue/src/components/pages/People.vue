<template>
  <div>
    <h1>People</h1>
    <ul class='cards'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </ul>
    <div class='pagination'>
      <span>Prev</span>
      <span>1 2 3 4 5 </span>
      <span>Next</span>
    </div>
  </div>
</template>

<script>
import getData from '@/js/getData';
import Card from '@/components/atoms/Card';

  export default {
    name: 'People',
    components: {
      Card
    },
    created() {
      getData('people')
    }
  }
</script>

<style scoped>

</style>