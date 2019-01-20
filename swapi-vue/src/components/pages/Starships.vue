<template>
  <div>
    <h1>Starships</h1>
    <div class='card-wrapper'>
      <div v-for='starship in starships' :key='starship.id' class='cards'>
        <Card>
          <p>name: {{starship.name}}</p>
          <p>class: {{starship.starship_class}}</p>
          <p>hyperdrive rating: {{starship.hyperdrive_rating}}</p>
          <p>cargo capacity: {{starship.cargo_capacity}}</p>
        </Card>
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
import {getDataByType} from '@/js/getData';
import Card from '@/components/atoms/Card';

  export default {
    name: 'Starships',
    components: {
      Card
    },
    data() {
      return {
        starships: []
      }
    },
    created() {
      getDataByType('starships')
        .then(data => this.starships = data.results)
        .catch(error => error)
    }
  }
</script>

<style scoped>

</style>