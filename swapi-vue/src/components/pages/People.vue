<template>
  <div class='people'>
    <h1>People</h1>
    <div class='card-wrapper'>
      <div v-for='person in people' :key='person.id' class='cards'>
        <Card>
          <p>name: {{person.name}}</p>
          <!-- <p>homeworld: {{planets[person.homeworld]}}</p> -->
          <!-- <p>species: {{species[person.species[0]].name}}</p> -->
          <!-- <p>language: {{species[person.species[0]].language}}</p> -->
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
import {getDataByType, getData} from '@/js/getData';
import Card from '@/components/atoms/Card';

  export default {
    name: 'People',
    components: {
      Card
    },
    data() {
      return {
        people: [],
        planets: {},
        species: {}
      }
    },
    created() {
      getDataByType('people')
        .then(data => {
          this.people = data.results
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