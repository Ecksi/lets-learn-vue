<template>
  <div>
    <span>{{ count }}</span>
    <span @click="addVote(voteType)" class="vote-icon">{{voteType === 'up' ? "👍" : "👎"}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
        required: true
      },
      voteType: {
        type: String,
        required: true,
      }
    },
    name: 'VoteCount',
    methods: {
      addVote(voteType) {
        this.$emit('addVote', voteType);
      }
    },
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
