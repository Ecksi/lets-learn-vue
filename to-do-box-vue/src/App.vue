<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png" class="logo">
    <ToDoList></ToDoList>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'app',
  components: {
    ToDoList,
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 24px;
    margin-top: 60px;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  .logo {
    display: block;
    margin: 20px auto;
    height: 75px;
  }
</style>
