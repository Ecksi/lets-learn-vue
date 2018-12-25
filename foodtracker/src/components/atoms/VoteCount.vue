<template>
  <div class="vote">
    <span>{{ count }}</span>
    <span v-on:click="addVote(voteType)">{{ voteType === 'up' ? "👍" : "👎" }}</span>
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
</style>
