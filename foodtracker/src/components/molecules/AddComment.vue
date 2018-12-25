<template>
  <div>
    <button class="add-comment">View comments</button>
  </div>
</template>

<script>
  export default {
    name: 'AddComment'
  }
</script>

<style scoped>
.add-comment {
  border: none;
  cursor: pointer;
  position: relative;
  left: 40%;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 100;
  color: #555;
}
</style>