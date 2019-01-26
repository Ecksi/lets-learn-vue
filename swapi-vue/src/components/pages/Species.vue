<template>
  <Wrapper 
    :payLoad='payLoad'
    @nextSet='paginate(payLoad.next)'
    @prevSet='paginate(payLoad.prev)'
    @jumpTo='paginate'
  />
</template>

<script>
import {getDataByType, getData, getDataOnPage} from '@/js/getData';
import Wrapper from '@/components/organisms/Wrapper';
import { mapState } from 'vuex';

  export default {
    name: 'Species',
    components: {
      Wrapper
    },
    data() {
      return {
        payLoad: {
          header: 'Species',
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

        return getDataOnPage('species', index)
          .then(data => {
            this.payLoad.type = []
            this.payLoad.next = data.next
            this.payLoad.prev = data.previous
            data.results.forEach(elem => {
              const cardData = {
                catOne: `name: ${elem.name}`,
                catTwo: `classification: ${elem.classification}`,
                catThree: `homeworld: ${elem.homeworld}`,
                catFour: `language: ${elem.language}`,
              }
              getData(elem.homeworld).then(data => cardData['catThree'] = `homeworld: ${data.name}`)
              this.payLoad.type.push(cardData)
            })
          })
          .catch(error => error)
      }
    },
    created() {
      getDataByType('species')
        .then(data => {
          this.payLoad.next = data.next
          this.payLoad.prev = data.previous
          this.payLoad.count = data.count
          data.results.forEach(elem => {
            const cardData = {
              catOne: `name: ${elem.name}`,
              catTwo: `classification: ${elem.classification}`,
              catThree: `homeworld: ${elem.homeworld}`,
              catFour: `language: ${elem.language}`,
            }
            getData(elem.homeworld).then(data => cardData['catThree'] = `homeworld: ${data.name}`)
            this.payLoad.type.push(cardData)
        })
      })
      .catch(error => error)
    }
  }
</script>

<style scoped>

</style>