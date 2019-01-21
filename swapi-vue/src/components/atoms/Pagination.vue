<template>
  <div class='pagination'>
    <span v-show='prev' @click='$emit("prevSet")' class='paginate'>Prev </span>
    <ul v-for='index in pageCount' :key='index'>
      <li @click='$emit("jumpTo", index)' class='page-num'>{{index}}</li>
    </ul>
    <span v-show='next' @click='$emit("nextSet")' class='paginate'> Next</span>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      prev: String,
      next: String,
      count: Number
    },
    computed: {
      pageCount() {
        return Math.ceil(this.count / 10)
      }
    }
  }
</script>

<style scoped>
  .pagination {
    text-align: center;
  }
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