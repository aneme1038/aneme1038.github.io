<template>
  <div>
    <form class="taskCreation" @submit="createTask">
      <input class="titleInput" type="text" v-model="title" name="title" placeholder="Category" />
      <input class="descInput" type="text" v-model="description" name="description" placeholder="Task Description" />
      <input class="submitButton" type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
//if you don't have a backend or entries do not have a unique id, this uuid will create a unique id for objects on frontend
  // import uuid from 'uuid';
  import { createTask } from '../axios';
  export default {
    name: "AddTask",
    data() {
      return {
        title: '',
        description: ''
      }
    },
    methods: {
      createTask(e, data) {
        e.preventDefault();
        const newTask = {
          // id: uuid.v4(),
          title: this.title,
          description: this.description,
          isCompleted: false
        }
        // Send up to App.vue by emitting an event
        this.$emit('create-task', newTask);
        title = this.title,
        description = this.description,
        isCompleted = false
      }
    }
  }
</script>
<!-- 'scoped' means this will only apply to this file -->
<style scoped>
  .taskCreation {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

</style>
