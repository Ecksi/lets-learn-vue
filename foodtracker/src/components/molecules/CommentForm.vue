<template>
  <div>
    <hr />
    <div class="comment-form">
      <section>
        <AddComment @addComment="addComment"></AddComment>
        <ul v-for="comment in comments" :key="comment.id" class="card-list">
          <li><Comment v-on:delete="deleteComment" v-on:addVote="addVote" :comment="comment" /></li>
        </ul>
      </section>
      <section class="spacer"></section>
    </div>
    <button v-on:click="hideComments" class="go-back">Go Back</button>
  </div>
</template>

<script>
  import AddComment from './AddComment';
  import Comment from './Comment';

  export default {
    name: 'CommentForm',
    components: {
      AddComment,
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
.comment-form {
  display: flex;
}

.card-list {
  padding: 0;
}

.spacer {
  width: 25%;
}

.go-back {
  border: none;
  position: relative;
  cursor: pointer;
  left: 44%;
  margin-bottom: 10px;
}
</style>