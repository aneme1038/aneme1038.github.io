<template>
  <div>
    <!-- This is the page that people see mainly -->
    <h1>Wedding Checklist</h1>
    <!-- Create a Task Area -->
    <div class="create-task">
        <label for="create-task">Add A New Task</label>
        <input type="text" id="create-task" v-model="text" placeholder="Create a task">
        <button v-on:click="createTask">Add</button>
    </div>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="tasksContainer">
      <!--Vue uses alot of binding. Documentation was pretty helpful but had to look up other errors -->
      <div class="task" v-for="(task, index) in tasks"
      v-bind:task="task"
      v-bind:index="index"
      v-bind:key="task._id"
      >
        {{ `${task.createdAt.getDate()}/${task.createdAt.getMonth()}/${task.createdAt.getFullYear()}`}}
        <p class="text">{{ task.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Requests from '../requests.js';
export default {
  name: 'Task',
  data() {
    return {
      tasks: [],
      error: '',
      text: ''
    }
  },
  //Created() is a lifecycle that runs automatically when a component is created
  async created() {
    //try catch statement here to set the tasks and fill it making a request to the backend through the requests.js file.
    try {
      //as indicated in request.js, using static should allow me to use below statement
      this.tasks = await Requests.getTasks();
    } catch(error) {
      this.error = error.message;
    }
  },
  methods: {
    async createTask() {
      await Requests.insertTask(this.text)
      this.tasks = await Requests.getTasks();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
