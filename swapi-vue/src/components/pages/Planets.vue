<template>
  <div>
    <h1>Planets</h1>
    <div class='card-wrapper'>
      <div v-for='planet in planets' :key='planet.id' class='cards'>
        <Card>
          <p>name: {{planet.name}}</p>
          <p>population: {{planet.population}}</p>
          <p>climate: {{planet.climate}}</p>
          <p>surface water: {{planet.surface_water}}</p>
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
    name: 'Planets',
    components: {
      Card
    },
    data() {
      return {
        planets: []
      }
    },
    created() {
      getDataByType('planets')
        .then(data => this.planets = data.results)
        .catch(error => error)
    }
  }
</script>

<style scoped>

</style>