<template>
  <div class='people'>
    <h1>People</h1>
    <div class='card-wrapper'>
      <div v-for='person in people' :key='person.id' class='cards'>
        <Card>
          <p>name: {{person.name}}</p>
          <!-- <p>homeworld: {{planets[person.homeworld]}}</p>
          <p>species: {{species[person.species[0]].name}}</p>
          <p>language: {{species[person.species[0]].language}}</p> -->
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
    name: 'People',
    components: {
      Card,
      Pagination
    },
    data() {
      return {
        people: [],
        planets: {},
        species: {},
        next: null,
        prev: null,
        count: null
      }
    },
    methods: {
      paginate(direction) {
        return getData(direction)
          .then(data => {
            this.people = data.results
            this.next = data.next
            this.prev = data.previous
          })
      },
      jumpTo(index) {
        return getDataOnPage('people', index)
          .then(data => {
            this.people = data.results
            this.next = data.next
            this.prev = data.previous
          })
      }
    },
    created() {
      getDataByType('people')
        .then(data => {
          this.people = data.results
          this.next = data.next
          this.prev = data.previous
          this.count = data.count
          this.people.forEach(person => {
            if (!this.planets[person.homeworld]) {
              getData(person.homeworld)
                .then(response => this.planets[response.data.url] = response.data.name)
                .catch(error => error)
            }
            if (!this.species[person.species[0]]) {
              getData(person.species[0])
                .then(response => this.species[response.data.url] = {
                  name: response.data.name,
                  language: response.data.language
                })
                .catch(error => error)
            }
          })
        })
    }
  }
</script>

<style scoped>

</style>