import axios from 'axios';

export function getAllFoods() {
  return axios.get('https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food')
}