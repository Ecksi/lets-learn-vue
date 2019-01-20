import axios from 'axios';

export function getData(string) {
  return axios.get(string)
    .then(response => response)
    .catch(error => error)
}

export function getDataByType(type) {
  return axios.get(`https://swapi.co/api/${type}`)
    .then(response => response.data)
    .catch(error => error)
}
