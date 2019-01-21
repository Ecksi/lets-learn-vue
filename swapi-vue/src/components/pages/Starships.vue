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
    name: 'Starships',
    components: {
      Wrapper
    },
    data() {
      return {
        payLoad: {
          header: 'Starships',
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

        return getDataOnPage('starships', index)
          .then(data => {
            this.payLoad.type = []
            this.payLoad.next = data.next
            this.payLoad.prev = data.previous
            data.results.forEach(elem => {
              const cardData = {
                catOne: `name: ${elem.name}`,
                catTwo: `class: ${elem.starship_class}`,
                catThree: `hyperDrive: ${elem.hyperdrive_rating}`,
                catFour: `cargo capactiy: ${elem.cargo_capacity}`,
              }
              this.payLoad.type.push(cardData)
            })
          })
          .catch(error => error)
      }
    },
    created() {
      getDataByType('starships')
        .then(data => {
          this.payLoad.next = data.next
          this.payLoad.prev = data.previous
          this.payLoad.count = data.count
          data.results.forEach(elem => {
            const cardData = {
              catOne: `name: ${elem.name}`,
              catTwo: `class: ${elem.starship_class}`,
              catThree: `hyperDrive: ${elem.hyperdrive_rating}`,
              catFour: `cargo capactiy: ${elem.cargo_capacity}`,
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