<template>
  <div>
    <hr />
    <div class="comment-form">
      <section>
        <AddComment @addComment="addComment"></AddComment>
        <div v-if="comments.length===0" class="no-comment">
          There are no comments, be the first to comment.
        </div>
        <ul v-else v-for="comment in comments" :key="comment.id" class="card-list">
          <li><Comment @delete="deleteComment" @addVote="addVote" :comment="comment" /></li>
        </ul>
      </section>
      <div class="spacer"></div>
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
        this.$emit('hideComments');
      },
      addVote(type, id) {
        this.$emit('addVote', type, id);
      },
      addComment() {
        event.preventDefault();
        this.$emit('addComment', event.target.children[0].value);
        event.target.children[0].value = '';
      },
      deleteComment(id) {
        this.$emit('delete', id);
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

.no-comment {
  text-align: left;
  margin-left: 40px;
  margin-top: 20px;
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