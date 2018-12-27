<template>
  <div class="card-body">
    <VoteMachine @addVote="addVote" :upvote="upvote" :downvote="downvote" />
    <span class="card-description"><slot /></span>
  </div>
</template>

<script>
  import VoteMachine from '../molecules/VoteMachine';

  export default {
    name: 'CardBody',
    components: {
      VoteMachine,
    },
    props: {
      upvote: Number,
      downvote: Number,
    },
    methods: {
      addVote(voteType) {
        this.$emit('addVote', voteType);
      },
    }
  }
</script>

<style>
.card-body {
  display: flex;
  justify-content: space-between;
}

.card-description {
  width: 100%;
  text-align: left;
  padding-left: 5px;
  padding-top: 20px;
}
</style>