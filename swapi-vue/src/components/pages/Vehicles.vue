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
    <div class='pagination'>
      <span>Prev</span>
      <span>1 2 3 4 5 </span>
      <span>Next</span>
    </div>
  </div>
</template>

<script>
import {getDataByType} from '@/js/getData';
import Card from '@/components/atoms/Card';

  export default {
    name: 'Vehicles',
    components: {
      Card
    },
    data() {
      return {
        vehicles: []
      }
    },
    created() {
      getDataByType('vehicles')
        .then(data => this.vehicles = data.results)
        .catch(error => error)
    }
  }
</script>

<style scoped>

</style>