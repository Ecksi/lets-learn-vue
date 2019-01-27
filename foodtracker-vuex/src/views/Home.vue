<template>
  <div>
    <FoodTrackerLanding />
  </div>
</template>

<script>
  import FoodTrackerLanding from '@/components/FoodTrackerLanding';
  import VoteMachine from '@/components/molecules/VoteMachine';
  export default {
    name: 'home',
    components: {
      FoodTrackerLanding,
      VoteMachine
    }
  }
</script>
