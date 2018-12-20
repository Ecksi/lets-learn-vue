<template>
  <div class="food-card">
    <CardHeader />
    <VoteCount voteType="👍" />
    <VoteCount voteType="👎" />
  </div>
</template>

<script>
  import VoteCount from '../atoms/VoteCount';
  import CardHeader from '../molecules/CardHeader';

  export default {
    name: 'FoodCard',
    components: {
      VoteCount,
      CardHeader,
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