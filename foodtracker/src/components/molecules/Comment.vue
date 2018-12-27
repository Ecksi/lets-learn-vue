<template>
  <div>
    <div class="card-body" :id="comment.id">
      <div class="card-body">
        <VoteMachine @addVote="addVote" :upvote="comment.up_vote" :downvote="comment.down_vote" />
        <div class="card-description">{{ comment.comment }}</div>
      </div>
      <div @click="deleteComment" class="delete-comment">&times;</div>
    </div>
    <div class="comment-date"><DateSanitizer :date="comment.created_at" /></div>
  </div>
</template>

<script>
  import VoteMachine from '../organisms/VoteMachine';
  import DateSanitizer from '../atoms/DateSanitizer';

  export default {
    name: 'Comment',
    components: {
      VoteMachine,
      DateSanitizer,
    },
    props: {
      comment: Object
    },
    methods: {
      addVote(voteType) {
        this.$emit('addVote', voteType, this.comment.id)
      },
      deleteComment() {
        this.$emit('delete', this.comment.id)
      }
    },
    computed: {
      sanitizeDate() {
        const dateArr = new Date(this.comment.created_at.split('T').join(' ')).toString().split(' ');
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
.card-body {
  display: flex;
  justify-content: space-between;
}

.vote-container {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 15px;
}

.card-description {
  width: 100%;
  text-align: left;
  padding-top: 20px;
}

.comment-date {
  text-align: left;
  margin-top: 5px;
  margin-left: 60px;
}

.delete-comment {
  cursor: pointer;
}
</style>