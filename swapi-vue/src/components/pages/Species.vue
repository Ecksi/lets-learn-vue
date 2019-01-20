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
    name: 'Species',
    components: {
      Card
    },
    props: {
      first: String,
      second: String,
      third: String,
      fourth: String
    },
    data() {
      return {
        species: [],
        planets: {}
      }
    },
    created() {
      getDataByType('species')
        .then(data => {
          this.species = data.results
          this.species.forEach(specie => {
            getData(specie.homeworld)
            .then(response => this.planets[response.data.url] = response.data.name)
        })
          // .catch(error => error)
      })
    }
  }
</script>

<style scoped>

</style>