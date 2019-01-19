<template>
  <div id="app">
    <AppHeader @addFood="addFood" />
    <Filters></Filters>
    <img v-if="loading" src="https://media1.tenor.com/images/8ac12962c05648c55ca85771f4a69b2d/tenor.gif?itemid=9212724" alt="a loading gif" class="loading">
    <ul v-else v-for="food in foods" :key="food.id" class="card-list">
      <li><FoodCard :food="food" @addVote="addVote" /></li>
    </ul>
  </div>
  <!-- limit search to 3 per page
        import fetch from external jsFile
        toy with refetch
        vuex later
        import momentjs and replace datesanitizer
        test
    -->
</template>

<script>
  import AppHeader from './components/molecules/AppHeader';
  import Filters from './components/molecules/Filters';
  import FoodCard from './components/organisms/FoodCard';

  export default {
    name: 'app',
    components: {
      AppHeader,
      Filters,
      FoodCard
    },
    data: () => {
      return {
        foods: [],
        loading: false
      }
    },
    created() {
      this.loading = true;
      fetch('https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food')
        .then(res => res.json())
        .then(data => {
          this.foods = data;
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          console.error('Error', error);
        })
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

<style>
#app {
  text-align: center;
}

.card-list {
  list-style-type: none;
}

.loading {
  margin-top: 30px;
}
</style>
