import axios from 'axios';

export function gettodos() {
  return axios.get('http://127.0.0.1:8000/todos/')
    .then(response => response.data)
}