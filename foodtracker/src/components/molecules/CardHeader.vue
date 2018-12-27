<template>
  <div class="card-header">
    <slot />
    <DateSanitizer :date="date" />
  </div>
</template>

<script>
  import DateSanitizer from '../atoms/DateSanitizer';

  export default {
    name: 'CardHeader',
    components: {
      DateSanitizer,
    },
    props: {
      date: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
}
</style>