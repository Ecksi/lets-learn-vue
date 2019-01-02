<template>
  <div>
    <span>{{ count }}</span>
    <span @click="$emit('addVote', voteType)" class="vote-icon">{{voteType === 'up' ? "👍" : "👎"}}</span>
  </div>
</template>

<script>
  export default {
    name: 'VoteCount',
    props: {
      count: {
        type: Number,
        required: true
      },
      voteType: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>
span {
  padding: 0 4px;
}

.vote-icon {
  cursor: pointer;
}
</style>
