<template>
  <div class='food-card'>
    <CardTitle :title='food.name' :date='food.created_at'/>
    <div class='card-body'>
      <VoteMachine />
      <CardDescription :description='food.description' />
    </div>
    AddComment
  </div>
</template>

<script>
  import CardTitle from '@/components/atoms/CardTitle';
  import CardDescription from '@/components/atoms/CardDescription';
  import VoteMachine from '@/components/molecules/VoteMachine';

  export default {
    name: 'FoodCard',
    components: {
      CardTitle,
      VoteMachine,
      CardDescription
    },
    props: {
      food: Object
    }
  }
</script>

<style scoped>
  .food-card {
    margin: 0 auto;
    width: 500px;
  }

  .card-body {
    display: flex;
  }
</style>