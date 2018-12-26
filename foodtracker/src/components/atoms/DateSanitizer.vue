<template>
  <div class="date">
    {{sanitizeDate}}
  </div>
</template>

<script>
  export default {
    name: 'DateSanitizer',
    props: {
      date: String
    },
    computed: {
      sanitizeDate() {
        const dateFix = new Date(this.date.split('T').join(' ')).toString().split(' ');
        const monthDayYear =  `${dateFix[1]} ${dateFix[2]}, ${dateFix[3]} `;
        const timeFix = dateFix[4].split(':');
        timeFix[0] >= 12 ? (timeFix[0] -= 12, timeFix[2] = 'PM') : timeFix[2] = 'AM';
        const time = `${timeFix[0]}:${timeFix[1]} ${timeFix[2]}`;
        
        return monthDayYear + time;
      },
    }
  }
</script>

<style scoped>
.date {
  font-family: 'system-ui', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 100;
  color: #555;
}
</style>