<template>
  <div @click="$emit('delete')" class="delete-thing">
    &times;
  </div>
</template>

<script>
  export default {
    name: 'DeleteThing'
  }
</script>

<style scoped>
  .delete-thing {
    cursor: pointer;
  }
</style>