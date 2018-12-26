<template>
  <div>
    <hr />
    <div class="commentSplit">
      <div>
        <form v-on:submit="addComment" action="">
          <textarea class="text-area" name="" id="" cols="80" rows="5"></textarea>
          <span class="submit-spacer"><button class="submit-comment">Submit Comment</button></span>
        </form>
        <div v-for="comment in comments" :key="comment.id">
          <Comment v-on:delete="deleteComment" v-on:addVote="addVote" :comment="comment" />
        </div>
      </div>
      <div class="spacer"></div>
    </div>
    <button v-on:click="hideComments" class="go-back">Go Back</button>
  </div>
</template>

<script>
  import Comment from './Comment';

  export default {
    name: 'CommentForm',
    components: {
      Comment,
    },
    props: {
      comments: Array,
    },
    methods: {
      hideComments() {
        this.$emit('hideComments')
      },
      addVote(type, id) {
        this.$emit('addVoteComment', type, id)
      },
      addComment() {
        event.preventDefault();
        this.$emit('addComment', event.target.children[0].value);
        event.target.children[0].value = '';
      },
      deleteComment(id) {
        this.$emit('delete', id)
      }
    },
  }
</script>

<style scoped>
.commentSplit {
  display: flex;
}

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

.go-back {
  border: none;
  position: relative;
  cursor: pointer;
  left: 44%;
  margin-bottom: 10px;
}
</style>