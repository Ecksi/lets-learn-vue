<template>
  <div>
    <h1>Vehicles</h1>
    <div class='card-wrapper'>
      <div v-for='vehicle in vehicles' :key='vehicle.id' class='cards'>
        <Card>
          <p>name: {{vehicle.name}}</p>
          <p>class: {{vehicle.vehicle_class}}</p>
          <p>top speed: {{vehicle.max_atmosphering_speed}}</p>
          <p>cargo capacity: {{vehicle.cargo_capacity}}</p>
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
    name: 'Vehicles',
    components: {
      Card,
      Pagination
    },
    data() {
      return {
        vehicles: [],
        next: null,
        prev: null,
        count: null
      }
    },
    methods: {
      paginate(direction) {
        return getData(direction)
          .then(data => {
            this.vehicles = data.results
            this.next = data.next
            this.prev = data.previous
          })
      },
      jumpTo(index) {
        return getDataOnPage('vehicles', index)
          .then(data => {
            this.vehicles = data.results
            this.next = data.next
            this.prev = data.previous
          })
      }
    },
    created() {
      getDataByType('vehicles')
        .then(data => {
          this.vehicles = data.results
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