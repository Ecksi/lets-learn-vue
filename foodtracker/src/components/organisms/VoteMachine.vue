<template>
  <div class="vote-container">
      <VoteCount v-on:addVote="addVote" :count="upvote" voteType="up" class="up-vote" />
      <VoteCount v-on:addVote="addVote" :count="downvote" voteType="down" />
  </div>
</template>

<script>
  import VoteCount from '../atoms/VoteCount';

  export default {
    name: 'VoteMachine',
    components: {
      VoteCount,
    },
    props: {
      upvote: {
        type: Number,
        required: true,
      },
      downvote: {
        type: Number,
        required: true,
      }
    },
    methods: {
      addVote(voteType) {
        this.$emit('addVote', voteType);
      },
    }
  }
</script>

<style scoped>
.vote-container {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 15px;
}

.up-vote {
  margin-bottom: 10px;
}
</style>