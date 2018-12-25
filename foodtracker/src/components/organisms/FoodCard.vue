<template>
  <div class="food-card" :id="food.id">
    <!-- <CardHeader :name="food.name" :date="food.created_at" /> -->
    <div class="card-header">
      <span class="title">{{ food.name }}</span>
      <span class="date">{{ sanitizeDate }}</span>
    </div>
    <div class="card-body">
      <div class="vote-container">
        <VoteCount v-on:addVote="moreVote" class="up-vote" :count="food.up_vote" voteType="up" />
        <VoteCount v-on:addVote="moreVote" :count="food.down_vote" voteType="down" />
      </div>
      <!-- <CardDescription :description="food.description" /> -->
      <div class="card-description">
        {{ food.description }}
      </div>
    </div>
    <ViewComments />
  </div>
</template>

<script>
  import VoteCount from '../atoms/VoteCount';
  import ViewComments from '../molecules/ViewComments';

  export default {
    name: 'FoodCard',
    props: {
      food: Object,
    },
    components: {
      VoteCount,
      ViewComments,
    },
    methods: {
      moreVote(voteType) {
        this.$emit('addVote', voteType, this.food.id);
      }
    },
    computed: {
      sanitizeDate() {
        const dateArr = new Date(this.food.created_at.split('T').join(' ')).toString().split(' ');
        const date = dateArr[1]+" "+dateArr[2]+", "+dateArr[3]+" ";
        const timeArr = dateArr[4].split(':');
        timeArr[0] >= 12 ? (timeArr[0] -= 12, timeArr[2] = 'PM') : timeArr[2] = 'AM';
        const time = timeArr[0]+':'+timeArr[1]+' '+timeArr[2];

        return date + time;
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

  .card-header {
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 0 15px;
  }

  .date {
    font-family: 'system-ui', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 14px;
    font-weight: 100;
    color: #555;
  }
  
  .card-body {
    display: flex;
    justify-content: space-between;
  }

  .vote-container {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    margin-top: 15px;
  }

  .up-vote {
    margin-bottom: 10px;
  }

  .card-description {
    width: 100%;
    text-align: left;
    padding-left: 5px;
    padding-top: 20px;
  }
</style>