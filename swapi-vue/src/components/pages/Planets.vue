<template>
  <Wrapper 
    :payLoad='payLoad'
    @nextSet='paginate(payLoad.next)'
    @prevSet='paginate(payLoad.prev)'
    @jumpTo='paginate'
  />
</template>

<script>
import {getDataByType, getDataOnPage} from '@/js/getData';
import Wrapper from '@/components/organisms/Wrapper';

  export default {
    name: 'Planets',
    components: {
      Wrapper
    },
    data() {
      return {
        payLoad: {
          header: 'Planets',
          type: [],
          next: null,
          prev: null,
          count: null
        }
      }
    },
    methods: {
      paginate(index) {
        if (typeof index === 'string') {
          index = parseInt(index.match(/\d+/g)[0])
        }

        return getDataOnPage('planets', index)
          .then(data => {
            this.payLoad.type = []
            this.payLoad.next = data.next
            this.payLoad.prev = data.previous
            data.results.forEach(elem => {
              const cardData = {
                catOne: `name: ${elem.name}`,
                catTwo: `climate: ${elem.climate}`,
                catThree: `population: ${elem.population}`,
                catFour: `surface water: ${elem.surface_water}`,
              }
              this.payLoad.type.push(cardData)
          })
        })
        .catch(error => error)
      }
    },
    created() {
      getDataByType('planets')
        .then(data => {
          this.payLoad.next = data.next
          this.payLoad.prev = data.previous
          this.payLoad.count = data.count
          data.results.forEach(elem => {
            const cardData = {
              catOne: `name: ${elem.name}`,
              catTwo: `climate: ${elem.climate}`,
              catThree: `population: ${elem.population}`,
              catFour: `surface water: ${elem.surface_water}`,
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