<template>
  <div>
    <span v-show='currentPage !== 1'>Prev</span>
    <ul v-for="index in paginationCount" :key="index">
      <li @click="$emit('changePage', index)" class='page-num'>{{index}}</li>
      <!-- if currentPage === index black no underline
          else index === blue with underline -->
    </ul>
    <!-- Add Prev / Next Pagination -->
    <span v-show='currentPage !== paginationCount && numberOfItems !== 0'>Next</span>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      numberOfItems: Number,
      currentPage: Number
    },
    computed: {
      paginationCount() {
        return Math.ceil(this.numberOfItems / 4);
      }
    }
  }
</script>

<style scoped>
  .paginate, .page-num {
    cursor: pointer;
  }
  ul {
    display: inline;
    padding: 0;
    margin: 0 5px;
  }
  li {
    display: inline;
    list-style: none;
  }
</style>