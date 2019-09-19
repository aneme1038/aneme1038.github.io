import axios from 'axios';
const url = 'http://localhost:3000';

export function getTasks() {
  return axios.get(`${url}/tasks`)
    .then(response => response.data);
}

export function deleteTask(id) {
  return axios.delete(`${url}/tasks/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
}

export function createTask(data) {
  return axios.post(`${url}/tasks`,
  {title: data.title, description: data.description, isCompleted: data.isCompleted })
    .then(response => {
      return response.data
    })
    .catch(error => console.log(error))
}

export function updateTask(data, id) {
  return axios.post(`${url}/tasks/${id}`, {data})
    .then(response => {
      return response.data
    })
    .catch(error => console.log(error))
}

export function getTask(id) {
  return axios.get(`${url}/tasks/${id}`)
    .then(response => response.data);
}
