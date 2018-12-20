<template>
  <div class="card-header">
    <span>{{ title }}</span>
    <span>{{ getDate }}</span>
  </div>
</template>

<script>
  export default {
    name: 'CardHeader',
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    computed: {
      getDate() {
        const splitDate = Date().split(' ');
        const monthDayYear = `${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`
        const time = splitDate[4].slice(0, splitDate[4].length - 3);

        return time.split(':')[0] >= 12
          ? `${monthDayYear} ${time} PM`
          : `${monthDayYear} ${time} AM`
      }
    }
  }
</script>

<style scoped>
  .card-header {
    display: flex;
    justify-content: space-between;
  }
</style>