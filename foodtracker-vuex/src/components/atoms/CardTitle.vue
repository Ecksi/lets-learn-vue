<template>
  <div class='card-header'>
    <h2>{{ title === null ? 'null title' : title }}</h2>
    <span>{{ date }}</span>
  </div>
</template>

<script>
  export default {
    name: 'CardTitle',
    props: { 
      title: String,
      date: String
    }
  }
</script>

<style scoped>
  .card-header {
    display: flex;
  }
</style>