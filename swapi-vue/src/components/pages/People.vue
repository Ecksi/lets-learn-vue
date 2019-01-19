<template>
  <div class='people'>
    <h1>People</h1>
    <div class='card-wrapper'>
      <div v-for='person in people' :key='person.id' class='cards'>
        <Card/>
      </div>
    </div>
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
    data() {
      return {
        people: []
      }
    },
    created() {
      getData('people')
        .then(data => this.people = data.results);
    }
  }
</script>

<style scoped>

</style>