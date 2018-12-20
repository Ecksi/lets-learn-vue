<template>
  <div class="vote">
    <span>{{ count }}</span>
    <span v-on:click="count++">{{ voteType }}</span>
  </div>
</template>

<script>
  export default {
    props: {
      voteType: {
        type: String,
        required: true,
      }
    },
    name: 'VoteCount',
    data: () => {
      return {
        count: 0,
      }
    }
  }
</script>

<style scoped>
</style>
