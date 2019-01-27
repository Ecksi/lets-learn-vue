<template>
  <div>
    {{ description === null ? 'no description' : description }}
  </div>
</template>

<script>
  export default {
    name: 'CardDescription',
    props: {
      description: String
    }
  }
</script>

<style scoped>

</style>