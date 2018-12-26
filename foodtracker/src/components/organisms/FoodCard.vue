<template>
  <div class="food-card" :id="food.id">
    <!-- Header -->
    <div class="card-header">
      <span class="title">{{ food.name }}</span>
      <DateSanitizer :date="food.created_at" />
    </div>
    <!-- Body -->
    <div class="card-body">
      <VoteMachine v-on:addVote="addVote" :upvote="food.up_vote" :downvote="food.down_vote" />
      <div class="card-description">
        {{ food.description }}
      </div>
    </div>
    <!-- Footer -->
    <div v-if="!show" class="right">
      <button @click="fetchComments" class="view-comments">View comments</button>
    </div>
    <CommentForm v-else v-on:delete="deleteComment" v-on:addComment="addComment" v-on:addVoteComment="commentVote" :comments="comments" v-on:hideComments="hideComments" />
  </div>
</template>

<script>
  import VoteMachine from '../organisms/VoteMachine';
  import CommentForm from '../molecules/CommentForm';
  import DateSanitizer from '../atoms/DateSanitizer';

  export default {
    name: 'FoodCard',
    data: () => {
      return {
        comments: [],
        show: !true
      }
    },
    props: {
      food: Object,
    },
    components: {
      VoteMachine,
      CommentForm,
      DateSanitizer,
    },
    methods: {
      addVote(voteType) {
        this.$emit('addVote', voteType, this.food.id);
      },
      fetchComments() {
        this.show = !this.show;
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${this.food.id}/comment`)
          .then(res => res.json())
          .then(data => this.comments = data)
      },
      commentVote(type, id) {
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${this.food.id}/comment/${id}`, {
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
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${this.food.id}/comment/`, {
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
        fetch(`https://cors-anywhere.herokuapp.com/http://calm-caverns-24814.herokuapp.com/food/${this.food.id}/comment/${id}`, {
          method: 'DELETE',
        }).then(res => res.json())
        .then(response => {
          console.log('Success:', JSON.stringify(response));
          this.comments.filter(el => el.id !== id);
        })
        .catch(error => console.error('Error:', error));
      },
      hideComments() {
        this.show = !this.show;
      }
    },
    computed: {
      sanitizeDate() {
        const dateArr = new Date(this.food.created_at.split('T').join(' ')).toString().split(' ');
        const date = dateArr[1]+" "+dateArr[2]+", "+dateArr[3]+" ";
        const timeArr = dateArr[4].split(':');
        timeArr[0] >= 12 ? (timeArr[0] -= 12, timeArr[2] = 'PM') : timeArr[2] = 'AM';
        const time = timeArr[0]+':'+timeArr[1]+' '+timeArr[2];

        return date + time;
      },
    }
  }
</script>

<style scoped>
.food-card {
  border: 1px solid #999;
  margin: 20px auto;
  max-width: 660px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
}

.card-body {
  display: flex;
  justify-content: space-between;
}

.card-description {
  width: 100%;
  text-align: left;
  padding-left: 5px;
  padding-top: 20px;
}

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