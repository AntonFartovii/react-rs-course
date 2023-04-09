import axios from 'axios';

const $host = axios.create({
  baseURL: 'https://bobsburgers-api.herokuapp.com/characters/',
});

export { $host };
