<template>
  <div>
    <h1>Films</h1>
    <div class='card-wrapper'>
      <div v-for='film in films' :key='film.id' class='cards'>
        <Card>
          <p>title: {{film.title}}</p>
          <p>episode: {{film.episode_id}}</p>
          <p>release date: {{film.release_date}}</p>
          <p>director: {{film.director}}</p>
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
// TODO: Order films my episode
import {getDataByType} from '@/js/getData';
import Card from '@/components/atoms/Card';

  export default {
    name: 'Films',
    components: {
      Card
    },
    data() {
      return {
        films: []
      }
    },
    created() {
      getDataByType('films')
        .then(data => this.films = data.results)
    }
  }
</script>

<style scoped>

</style>