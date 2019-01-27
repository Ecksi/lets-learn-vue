<template>
  <div class='vote'>
    <span class='count'>{{ count }}</span>
    <button @click='$emit("changeVote", voteType)' class='vote-button'>{{ voteType === 'up' ? '👍' : '👎' }}</button>
  </div>
</template>

<script>
  export default {
    name: 'Vote',
    props: {
      count: Number,
      voteType: String
    }
  }
</script>

<style scoped>
  .vote {
    text-align: left;
  }
  .count {
    padding-right: 10px;
  }
  .vote-button {
    cursor: pointer;
    border: none;
  }
</style>