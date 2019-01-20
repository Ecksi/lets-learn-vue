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
    <Pagination @nextSet='paginate(next)' @prevSet='paginate(prev)' @jumpTo='jumpTo' :prev='prev' :next='next' :count='count' />    
  </div>
</template>

<script>
import {getDataByType, getData, getDataOnPage} from '@/js/getData';
import Card from '@/components/atoms/Card';
import Pagination from '@/components/atoms/Pagination';

  export default {
    name: 'Planets',
    components: {
      Card,
      Pagination
    },
    data() {
      return {
        planets: [],
        next: null,
        prev: null,
        count: null
      }
    },
    methods: {
      paginate(direction) {
        return getData(direction)
          .then(data => {
            this.planets = data.results
            this.next = data.next
            this.prev = data.previous
          })
      },
      jumpTo(index) {
        return getDataOnPage('planets', index)
          .then(data => {
            this.planets = data.results
            this.next = data.next
            this.prev = data.previous
          })
      }
    },
    created() {
      getDataByType('planets')
        .then(data => {
          this.planets = data.results
          this.next = data.next
          this.prev = data.previous
          this.count = data.count
        })
        .catch(error => error)
    }
  }
</script>

<style scoped>

</style>