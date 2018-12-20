<template>
  <div class="food-card">
    <VoteCount voteType="👍" />
    <VoteCount voteType="👎" />
  </div>
</template>

<script>
  import VoteCount from '../atoms/VoteCount';

  export default {
    name: 'FoodCard',
    components: {
      VoteCount,
    },
  }
</script>

<style scoped>
  .food-card {
    border: 1px solid #999;
    margin: auto;
    width: 960px;
  }
</style>