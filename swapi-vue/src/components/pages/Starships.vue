<template>
  <div>
    <h1>Starships</h1>
    <div class='card-wrapper'>
      <div v-for='starship in starships' :key='starship.id' class='cards'>
        <Card>
          <p>name: {{starship.name}}</p>
          <p>class: {{starship.starship_class}}</p>
          <p>hyperdrive rating: {{starship.hyperdrive_rating}}</p>
          <p>cargo capacity: {{starship.cargo_capacity}}</p>
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
    name: 'Starships',
    components: {
      Card,
      Pagination
    },
    data() {
      return {
        starships: [],
        next: null,
        prev: null,
        count: null
      }
    },
    methods: {
      paginate(direction) {
        return getData(direction)
          .then(data => {
            this.starships = data.results
            this.next = data.next
            this.prev = data.previous
          })
      },
      jumpTo(index) {
        return getDataOnPage('starships', index)
          .then(data => {
            this.starships = data.results
            this.next = data.next
            this.prev = data.previous
          })
      }
    },
    created() {
      getDataByType('starships')
        .then(data => {
          this.starships = data.results
          this.next = data.next
          this.prev = data.previous
          this.count = data.count
        })
        .catch(error => error)
    }
  }
</script>

<style scoped>

</style>