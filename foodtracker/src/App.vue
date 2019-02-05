<template>
  <div id="app">
    <AppHeader @addFood="addFood" />
    <PhoneFormatter />
    <Filters 
      @filterVote="filterVote"
      @filterDate="filterDate"
      @filterText="filterText" />
    <img v-if="loading" src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif" alt="a loading gif" class="loading">
    <ul v-else v-for="food in currentFoods" :key="food.id" class="card-list">
      <li><FoodCard :food="food" @addVote="addVote" @deleteFood="deleteFood" /></li>
    </ul>
    <Pagination @changePage='changePage' :numberOfItems='foods.length' :currentPage='currentPage' />
  </div>
</template>

<script>
  import AppHeader from './components/molecules/AppHeader';
  import Filters from './components/molecules/Filters';
  import FoodCard from './components/organisms/FoodCard';
  import Pagination from '@/components/atoms/Pagination';
  import PhoneFormatter from '@/components/atoms/PhoneFormatter';2

  export default {
    name: 'app',
    components: {
      AppHeader,
      Filters,
      FoodCard,
      Pagination,
      PhoneFormatter
    },
    data: () => {
      return {
        foods: [],
        currentFoods: [],
        currentPage: 1,
        loading: false
      }
    },
    created() {
      this.loading = true;
      fetch('https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food')
        .then(res => res.json())
        .then(data => {
          this.foods = data;
          this.foods.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
          this.currentFoods = this.foods.slice(0, 4)
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
        })
        .then(({response}) => {
          this.getFoods();
          window.alert(`You just added ${response.name} to the 9er Food Review`);
        })
        .catch(error => console.error('Error:', error));
      },
      deleteFood(id) {
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${id}`, { method: 'DELETE' })
          .then(({response}) => this.getFoods())
          .catch(error => console.error('Error:', error));
      },
      getFoods() {
        this.loading = true;
        fetch('https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food')
          .then(res => res.json())
          .then(data => {
            this.foods = data;
            this.foods.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
            this.currentFoods = this.foods.slice(0, 4)
            this.loading = false;
          })
          .catch(error => {
            this.loading = false;
            console.error('Error', error);
          })
      },
      filterVote(type) { this.foods.sort((a,b) => b[`${type}_vote`] - a[`${type}_vote`])},
      filterDate(type) {
        type === 'oldest'
          ? this.foods.sort((a,b) => new Date(a.created_at) - new Date(b.created_at))
          : this.foods.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
      },
      filterText(chars) {
        this.currentFoods = this.foods.filter(food => food.name.toLowerCase().includes(chars.toLowerCase()));
      },
      changePage(pageNum) {
        this.currentPage = pageNum;
        this.currentFoods = this.foods.slice((pageNum - 1) * 4, (pageNum - 1) * 4 + 4)
      }
    },
    watch: {
      currentFoods() {
        this.currentFoods.length === this.foods.length && this.getFoods()
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
  margin-top: 60px;
}
</style>
