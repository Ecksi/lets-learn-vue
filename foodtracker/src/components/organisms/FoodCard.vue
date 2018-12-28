<template>
  <div class="food-card" :id="food.id">
    <CardHeader :date="food.created_at">{{ food.name }}</CardHeader>
    <CardBody @addVote="addVote" :upvote="food.up_vote" :downvote="food.down_vote">{{ food.description }}</CardBody>
    <ViewComments :foodId="food.id"></ViewComments>
  </div>
</template>

<script>
  import CardBody from '../molecules/card/CardBody';
  import CardHeader from '../molecules/card/CardHeader';
  import ViewComments from '../molecules/comment/ViewComments';

  export default {
    name: 'FoodCard',
    props: {
      food: Object,
    },
    components: {
      CardBody,
      CardHeader,
      ViewComments,
    },
    methods: {
      addVote(voteType) {
        this.$emit('addVote', voteType, this.food.id);
      },
    }
  }
</script>

<style scoped>
.food-card {
  border: 1px solid #999;
  margin: 20px auto;
  max-width: 660px;
}
</style>