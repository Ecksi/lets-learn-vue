<template>
  <div id="app">
    <AppHeader />
    <div v-for="food in foods">
      <FoodCard :food="food" v-on:addVote="moreVote" />
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/molecules/AppHeader';
  import FoodCard from './components/organisms/FoodCard';

  export default {
    name: 'app',
    components: {
      AppHeader,
      FoodCard
    },
    computed: {
      fetchFoods() {
        fetch('https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food').then(res => res.json()).then(data => this.foods = data)
      },
    },
    data: () => {
      return {
        foods: [],
      }
    },
    methods: {
      moreVote(type, id) {
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${id}`, {
          method: 'PUT',
          body: JSON.stringify({vote: type}),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => {
          console.log('Success:', JSON.stringify(response));
          this.foods.forEach(el => el.id === id ? el[type+'_vote'] += 1 : '');
        })
        .catch(error => console.error('Error:', error));
      }
    }
  }
</script>

<style scoped>
  #app {
    text-align: center;
  }

  .food-card-container {
    border-top: 1px solid #999;
  }
</style>
