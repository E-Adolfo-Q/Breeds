import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'https://dog.ceo/api',
});

export default clienteAxios;
