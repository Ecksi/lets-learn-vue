<template>
  <div>
    <h1>{{payLoad.header}}</h1>
    <div class='card-wrapper'>
      <div v-for='thing in payLoad.type' :key='thing.id' class='cards'>
        <Card>
          <p>{{thing.catOne}}</p>
          <p>{{thing.catTwo}}</p>
          <p>{{thing.catThree}}</p>
          <p>{{thing.catFour}}</p>
        </Card>
      </div>
    </div>
    <Pagination 
      @nextSet='$emit("nextSet")'
      @prevSet='$emit("prevSet")'
      @jumpTo='jumpTo'
      :prev='payLoad.prev'
      :next='payLoad.next'
      :count='payLoad.count' 
      v-if='payLoad.next !== null || payLoad.prev !== null'
    />
  </div>
</template>

<script>
import Card from '@/components/atoms/Card';
import Pagination from '@/components/atoms/Pagination';

  export default {
    name: 'Wrapper',
    components: {
      Card,
      Pagination
    },
    props: {
      payLoad: Object
    },
    methods: {
      jumpTo(index) {this.$emit('jumpTo', index)}
    }
  }
</script>

<style scoped>

</style>