<template>
  <div class="food-card" :id="food.id">
    <DeleteThing class="delete-card" @delete="$emit('deleteFood', food.id)" />
    <CardHeader :date="food.created_at">
      {{ food.name === null || food.name === '' ? 'Someone forgot to enter a food name' : food.name }}
    </CardHeader>
    <CardBody @addVote="addVote" :upvote="food.up_vote" :downvote="food.down_vote">
      {{ food.description === null || food.description === '' ? 'No description? How will I know how it tastes?' : food.description }}
    </CardBody>
    <ViewComments :foodId="food.id"></ViewComments>
  </div>
</template>

<script>
  import CardBody from '../molecules/card/CardBody';
  import CardHeader from '../molecules/card/CardHeader';
  import DeleteThing from '@/components/atoms/DeleteThing';
  import ViewComments from '../molecules/comment/ViewComments';

  export default {
    name: 'FoodCard',
    props: {
      food: Object,
    },
    components: {
      CardBody,
      CardHeader,
      DeleteThing,
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

.delete-card {
  float: right;
  margin-right: 10px;
  margin-top: 5px;
  width: 10px;
}
</style>