<template>
  <div class='vote-machine'>
    <Vote @click='changeVote' :count=0 voteType='up' />
    <Vote @click='changeVote' :count=0 voteType='down' />
  </div>
</template>

<script>
  import Vote from '@/components/atoms/Vote';

  export default {
    name: 'VoteMachine',
    components: { Vote },
    props: {
      count: Number,
      voteType: String,
    },
    methods: {
      changeVote: voteType => this.$emit('changeVote', voteType)
    }
  }
</script>

<style scoped>
  .vote-machine {
    display: flex;
    flex-direction: column;
  }
</style>