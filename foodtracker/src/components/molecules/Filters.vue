<template>
  <div>
    <button @click='$emit("filterVote", "up")'>Most Upvotes</button>
    <button @click='$emit("filterVote", "down")'>Most Downvotes</button>
    <button @click='$emit("filterDate", "newest")'>Newest</button>
    <button @click='$emit("filterDate", "oldest")'>Oldest</button>
    <input @keyup="$emit('filterText', searchText)" v-model='searchText' type="text" placeholder="search by name">
  </div>
</template>

<script>
  export default {
    name: 'Filters',
    data() {
      return {
        searchText: ''
      }
    }
  }
</script>

<style scoped>

</style>
