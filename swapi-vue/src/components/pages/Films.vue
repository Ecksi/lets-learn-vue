<template>
  <Wrapper :payLoad='payLoad' />
</template>

<script>
import {getDataByType} from '@/js/getData';
import Wrapper from '@/components/organisms/Wrapper';

  export default {
    name: 'Films',
    components: {
      Wrapper
    },
    data() {
      return {
        payLoad: {
          header: 'Films',
          type: [],
        }
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
        .then(data => {
          data.results.sort(this.sortFilms).forEach(elem => {
            const cardData = {
              catOne: `episode ${elem.episode_id}`,
              catTwo: `${elem.title}`,
              catThree: `release: ${elem.release_date}`,
              catFour: `director: ${elem.director}`,
            }
            this.payLoad.type.push(cardData)
          })
        })
        .catch(error => error)
    }
  }
</script>

<style scoped>

</style>