<template>
  <div @click="deleteThing" class="delete-thing">
    &times;
  </div>
</template>

<script>
  export default {
    name: 'DeleteThing',
    methods: {
      deleteThing() {
        this.$emit('delete');
      }
    }
  }
</script>

<style scoped>
.delete-thing {
  cursor: pointer;
}
</style>