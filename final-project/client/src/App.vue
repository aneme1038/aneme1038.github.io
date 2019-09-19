<template>
  <div id="app">
    <!--Import the various components -->
    <Header />
    <AddTask v-on:add-task="createTask" />
    <!--<UpdateTask v-on:update-task="updateTask" />-->
    <Tasks v-bind:tasks="tasks" v-on:delete-task="deleteTask(id)" />
  </div>
</template>

<script>
// import Task from './components/Task';
import Header from './components/layout/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// import Requests from './requests.js';
import { getTasks } from './axios';
import { deleteTask } from './axios';
import { createTask } from './axios';
import { updateTask } from './axios';
// import UpdateTask from './components/UpdateTask';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Header,
    // Task
    Tasks,
    AddTask,
    // UpdateTask
  },
  data() {
    return {
      tasks: [],
      error: '',
      text: '',
      title: '',
      description: '',
      isCompleted: false
    }
  },
  methods: {
    deleteTask(id) {
      axios.delete(`http://localhost:3000/tasks/${task._id}`)
        .then(response => this.tasks = this.tasks.filter(task => task.id !== id))
        .catch(error => console.log(error))
  //       this.tasks = this.tasks.filter(task => task.id !== id);
    },
    createTask(newTask) {
      const {title, description, isCompleted} = newTask;
      axios.post('http://localhost:3000/tasks/', {
        title,
        description,
        isCompleted
      })
        .then(response => this.tasks = [...this.tasks, response.data])
        .catch(error => console.log(error))
      this.tasks = [...this.tasks, newTask]
    },
//     updateTask(updatedTask) {
//       const {title, completed} = updatedTask;
//       axios.post('', {
//         title,
//         completed
//       })
//         .then(response => this.tasks = [...this.tasks, response.data])
//         .catch(error => console.log(error))
//     }
  },
  mounted() {
    console.log(axios.get('http://localhost:3000/tasks'))
    axios.get('http://localhost:3000/tasks')
      .then(response => this.tasks = response.data)
      .catch(error => console.log(error))

  },
  created() {
    axios.get('')
      .then(response => this.tasks = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<!-- with no 'scoped' means this will apply to all files in project/client section/frontend -->

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Helvetica;
    line-height: 1.4;
  }
  .submitButton {
    background-color: #D9D1D0;
    color: #735F5D;
  }
</style>
