import axios from 'axios';

export default function getData(type) {
  return axios.get(`https://swapi.co/api/${type}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}
