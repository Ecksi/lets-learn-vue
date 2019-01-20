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
  </div>
</template>

<script>
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
    methods: {
      sortFilms: (a,b) => {
        if (a.episode_id < b.episode_id)
          return -1;
        if (a.episode_id > b.episode_id)
          return 1;
        return 0;
      }
    },
    created() {
      getDataByType('films')
        .then(data => this.films = data.results.sort(this.sortFilms))
    }
  }
</script>

<style scoped>

</style>