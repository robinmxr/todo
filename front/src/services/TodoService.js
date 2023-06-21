import axios from 'axios';

export function getTodos() {
  return axios.get('http://127.0.0.1:8000/todos/')
    .then(response => response.data)
}

export function deleteTodo(todoId) {
  return axios.delete('http://127.0.0.1:8000/todos/' + todoId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addTodo(todo){
  return axios.post('http://127.0.0.1:8000/todos/', {
    todoId:null,
    name:todo.name.value,
    details:todo.details.value,
    status:todo.status.value,
    
  })
    .then(response=>response.data)
}

export function updateTodo(todoId, todo) {
  return axios.put('http://127.0.0.1:8000/todos/' + todoId + '/', {
    name:todo.name.value,
    details:todo.details.value,
    status:todo.status.value,
  })
   .then(response => response.data)
}