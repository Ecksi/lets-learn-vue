<template>
  <div id="app">
    <AppHeader v-on:addFood="addFood" />
    <div v-for="food in foods" :key="food.id">
      <FoodCard :food="food" v-on:addVote="addVote" />
    </div>
  </div>
  <!-- limit search to 3 per page

      add search filters 
        most upvotes
        most downvotes
        most comments
        newest
        name
   -->
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
    data: () => {
      return {
        foods: [],
      }
    },
    created() {
      fetch('https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food')
        .then(res => res.json())
        .then(data => this.foods = data)
        .catch(error => console.error('Error', error))
    },
    methods: {
      addVote(type, id) {
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
      },
      addFood(name, desc, image) {
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/`, {
          method: 'POST',
          body: JSON.stringify({
            'name': name,
            'description': desc,
            'image_url': image,
          }),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => {
          console.log('Success:', JSON.stringify(response));
          this.foods.push(response);
          window.alert(`You just added ${response.name} to the 9er Food Review`);
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
