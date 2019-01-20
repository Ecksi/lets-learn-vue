<template>
  <div>
    <h1>Species</h1>
    <div class='card-wrapper'>
      <div v-for='specie in species' :key='specie.id' :first='specie.name' class='cards'>
        <Card>
          <p>name: {{specie.name}}</p>
          <p>classification: {{specie.classification}}</p>
          <!-- <p>homeworld: {{planet[specie.homeworld]}}</p> -->
          <p>language: {{specie.language}}</p>
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
    name: 'Species',
    components: {
      Card,
      Pagination
    },
    data() {
      return {
        species: [],
        planets: {},
        next: null,
        prev: null,
        count: null
      }
    },
    methods: {
      paginate(direction) {
        return getData(direction)
          .then(data => {
            this.species = data.results
            this.next = data.next
            this.prev = data.previous
          })
      },
      jumpTo(index) {
        return getDataOnPage('species', index)
          .then(data => {
            this.species = data.results
            this.next = data.next
            this.prev = data.previous
          })
      }
    },
    created() {
      getDataByType('species')
        .then(data => {
          this.species = data.results
          this.next = data.next
          this.prev = data.previous
          this.count = data.count
          this.species.forEach(specie => {
            getData(specie.homeworld)
            .then(data => this.planets[data.url] = data.name)
        })
          // .catch(error => error)
      })
    }
  }
</script>

<style scoped>

</style>