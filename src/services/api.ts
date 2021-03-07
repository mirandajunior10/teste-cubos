import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params:{
    api_key: '4fa26cc842e57de6d57f5c9c58ffa748',
    language: 'pt-br',
  }
});

export default api;
