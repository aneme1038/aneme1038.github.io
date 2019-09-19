<template>
  <div>
    <!--Needs a unique key due to some lint error. Had to look this up. The key is for the individual id's and we have to bind it. Documentation found at https://vuejs.org/v2/guide/list.html -->
    <div v-bind:key="task._id" v-for="task in tasks">
      <TaskObject v-bind:task="task" v-on:delete-task="$emit('delete-task', task._id)"/>

    </div>
  </div>
</template>

<script>
  import TaskObject from './TaskObject.vue';
  export default {
    //name for this file
    name: "Tasks",
    //associated components
    components: {
      TaskObject
    },
    //use tasks for above template
    props: ["tasks", "task"],
  }
</script>
<!-- 'scoped' means this will only apply to this file -->
<style scoped>
</style>
