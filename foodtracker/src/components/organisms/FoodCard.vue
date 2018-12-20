<template>
  <div class="food-card">
    <CardHeader title="Food Title" />
    <div class="card-body">
      <div class="vote-container">
        <VoteCount voteType="👍" />
        <VoteCount voteType="👎" />
      </div>
      <CardDescription />
    </div>
  </div>
</template>

<script>
  import VoteCount from '../atoms/VoteCount';
  import CardHeader from '../molecules/CardHeader';
  import CardDescription from '../molecules/CardDescription';

  export default {
    name: 'FoodCard',
    components: {
      VoteCount,
      CardHeader,
      CardDescription,
    },
  }
</script>

<style scoped>
  .food-card {
    border: 1px solid #999;
    margin: auto;
    width: 960px;
  }
  
  .card-body {
    display: flex;
    justify-content: space-between;
  }
</style>