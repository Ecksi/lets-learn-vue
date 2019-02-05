<template>
  <div>
    <div v-if="!show" class="right">
      <button @click="fetchComments" class="view-comments">View comments</button>
    </div>
    <CommentForm v-else 
      @delete="deleteComment"
      @addComment="addComment"
      @addVote="addVote"
      @hideComments="hideComments"
      :comments="comments"
    />
  </div>
</template>

<script>
  import CommentForm from './CommentForm';

  export default {
    name: 'ViewComments',
    components: {
      CommentForm,
    },
    props: {
      foodId: {
        type: Number,
        required: true
      }
    },
    data: () => {
      return {
        comments: [],
        show: false,
      }
    },
    methods: {
      fetchComments() {
        this.show = !this.show;
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${this.foodId}/comment`)
          .then(res => res.json())
          .then(data => this.comments = data)
          .catch(error => console.error('Error:', error));
      },
      addVote(type, id) {
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${this.foodId}/comment/${id}`, {
          method: 'PUT',
          body: JSON.stringify({vote: type}),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(response => {
            console.log('Success:', JSON.stringify(response));
            this.comments.forEach(el => el.id === id ? el[type+'_vote'] += 1 : '');
          })
          .catch(error => console.error('Error:', error));
      },
      addComment(text) {
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${this.foodId}/comment/`, {
          method: 'POST',
          body: JSON.stringify({comment: text}),
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
          .then(response => {
            console.log('Success:', JSON.stringify(response));
            this.comments.push(response);
          })
          .catch(error => console.error('Error:', error));
      },
      deleteComment(id) {
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${this.foodId}/comment/${id}`, { method: 'DELETE' })
          .then(({response}) => this.comments = this.comments.filter(el => el.id !== id))
          .catch(error => console.error('Error:', error));
      },
      hideComments() {
        this.show = !this.show;
      }
    }
  }
</script>

<style scoped>
.right {
  text-align: right;
  margin-right: 8px;
}

.view-comments {
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 100;
  color: #555;
}
</style>