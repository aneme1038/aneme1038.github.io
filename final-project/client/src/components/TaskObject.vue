<template>
  <div class="task-object" v-bind:key="task._id" v-bind:class="{'task-complete':task.isCompleted}">
    <!--Binding a class on the condition that the statement after the colon is true. If it is, apply the 'is-complete' class to the object -->
    <p>
      <input type="checkbox" v-on:change="completeTask">
      <h4>Category:</h4>
        {{task.title}}
      <h4>Description: </h4>
        {{task.description}}
      <h4>Completed:</h4>
        {{task.isCompleted}}
      <button @click="deleteTask(task, id)">X</button>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "TaskObject",
    props: ["task"],
    data() {
      return {
        title: '',
        description: '',
        isCompleted: false,
        id: ''
      }
    },
    methods: {
      completeTask() {
        this.task.isCompleted = !this.task.isCompleted;
      },
      deleteTask(task, id) {
        // console.log('this');
          axios.delete(`http://localhost:3000/tasks/${task._id}`)
            .then(response => this.tasks = this.tasks.filter(task => task._id !== id))
            .catch(error => console.log(error))
      }
    }
  }
</script>
<!-- This scoped styling is limited to this file only -->
<style scoped>
  .task-object {
    padding: 15px;
    border: 1.25px #cdc double;
  }
  .task-complete {
    text-decoration: line-through;
  }
  .deleteBtn {
    border-radius: 100%;
    background-color: #ddc;
    float: right;
    cursor: pointer;
  }
</style>
