<template>
  <form v-on:submit="addComment" action="">
    <textarea class="text-area" v-model="text" id="" cols="80" rows="5"></textarea>
    <span class="submit-spacer"><button class="submit-comment">Submit Comment</button></span>
  </form>
</template>

<script>
  export default {
    name: 'AddComment',
    data () {
      return {
        text: ''
      }
    },
    methods: {
      addComment() {
        event.preventDefault();
        this.$emit('addComment', this.text);
        this.text = '';
      },
    }
  }
</script>

<style scoped>
.text-area {
  margin: 25px 0 7px 45px;
  resize: none;
}

.spacer {
  width: 25%;
}

.submit-comment {
  border: 1px solid gray;
  cursor: pointer;
  text-align: right;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 100;
  color: #555;
}

.submit-spacer {
  display: inline-block;
  width: 100%;
  text-align: right;
}
</style>