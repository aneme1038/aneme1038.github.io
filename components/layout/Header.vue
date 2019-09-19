<template>
  <header class="header">
    <h1 class="title">Wed-Ly</h1>
    <h2 class="subtitle">Personalized Wedding Checklist</h2>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>
<!-- 'scoped' means this will only apply to this file -->
<style scoped>
  .title {
    font-size: 2.5em;
    letter-spacing: 10px;
    text-align: center;

  }
  header {
    background-color: #40312C;
    color: #F0F0F2;
  }
  .subtitle {
    font-size: 1.5em;
    letter-spacing: 10px;
    text-align: center;
  }
</style>
