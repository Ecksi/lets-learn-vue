<template>
  <div>
    <img v-if='loading' src='@/assets/bb8-loading.gif' alt=''>
    <Wrapper
      v-else
      :payLoad='payLoad'
      @nextSet='paginate(payLoad.next)'
      @prevSet='paginate(payLoad.prev)'
      @jumpTo='paginate'
    />
  </div>
</template>

<script>
import {getDataByType, getData, getDataOnPage} from '@/js/getData';
import Wrapper from '@/components/organisms/Wrapper';

  export default {
    name: 'People',
    components: {
      Wrapper
    },
    data() {
      return {
        payLoad: {
          header: 'People',
          type: [],
          next: null,
          prev: null,
          count: null,
          loading: false,
        }
      }
    },
    methods: {
      paginate(index) {
        if (typeof index === 'string') {
          index = parseInt(index.match(/\d+/g)[0])
        }

        return getDataOnPage('people', index)
          .then(data => {
            this.payLoad.type = []
            this.payLoad.next = data.next
            this.payLoad.prev = data.previous
            data.results.forEach(elem => {
              const cardData = {
                catOne: `name: ${elem.name}`,
                catTwo: `species: ${elem.species}`,
                catThree: `birth year: ${elem.birth_year}`,
                catFour: `homeworld: ${elem.homeworld}`,
              }
              getData(elem.species).then(data => cardData['catTwo'] = `species: ${data.name}`)
              getData(elem.homeworld).then(data => cardData['catFour'] = `homeworld: ${data.name}`)
              this.payLoad.type.push(cardData)
            })
          })
          .catch(error => error)
      }
    },
    created() {
      console.log(this.loading)
      this.loading = true;
      console.log(this.loading)
      getDataByType('people')
        .then(data => {
          this.payLoad.next = data.next
          this.payLoad.prev = data.previous
          this.payLoad.count = data.count
          data.results.forEach(elem => {
            const cardData = {
              catOne: `name: ${elem.name}`,
              catTwo: `species: ${elem.species}`, 
              catThree: `birth year: ${elem.birth_year}`,
              catFour: `homeworld: ${elem.homeworld}`,
            }
            getData(elem.species).then(data => cardData['catTwo'] = `species: ${data.name}`)
            getData(elem.homeworld).then(data => cardData['catFour'] = `homeworld: ${data.name}`)
            this.payLoad.type.push(cardData)
            this.loading = false;

          })
        })
        .catch(error => error)
      this.loading = false;
      console.log(this.loading)
    }
  }
</script>

<style scoped>

</style>