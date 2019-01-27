<template>
  <div>
    <Header title='Food Tracker App - Now with Vuex!' />
    <p>You have {{ countLinks }} foods in the database</p>
    <CardWrapper>
      <ul>
        <li><FoodCard v-for='(food, index) in $store.state.foods' :key='index' :food='food' /></li>
      </ul>
    </CardWrapper>
  </div>
</template>

<script>
  import Header from '@/components/atoms/FoodTrackerHeader';
  import FoodCard from '@/components/organisms/FoodCard';
  import CardWrapper from '@/components/atoms/CardWrapper';
  import { mapGetters } from 'vuex';

  export default {
    name: 'FoodTrackerLanding',
    components: { 
      Header,
      CardWrapper,
      FoodCard
    },
    computed: {
      ...mapGetters(['countLinks'])
    },
    created() {
      this.$store.dispatch('getFoods')
    }
  }
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>