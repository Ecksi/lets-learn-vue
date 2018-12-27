<template>
  <div>
    <div class="card-body" :id="comment.id">
      <CardBody @addVote="addVote" :upvote="comment.up_vote" :downvote="comment.down_vote">{{ comment.comment }}</CardBody>
      <DeleteThing @delete="deleteThing" />
    </div>
    <div class="comment-date"><DateSanitizer :date="comment.created_at" /></div>
  </div>
</template>

<script>
  import CardBody from '../molecules/CardBody';
  import DeleteThing from '../atoms/DeleteThing';
  import DateSanitizer from '../atoms/DateSanitizer';

  export default {
    name: 'Comment',
    components: {
      CardBody,
      DeleteThing,
      DateSanitizer,
    },
    props: {
      comment: Object
    },
    methods: {
      addVote(voteType) {
        this.$emit('addVote', voteType, this.comment.id)
      },
      deleteThing() {
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
.comment-date {
  text-align: left;
  margin-top: 5px;
  margin-left: 60px;
}
</style>