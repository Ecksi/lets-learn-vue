<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <form v-on:submit="addFood" class="add-food" action="">
          <h1>Add a new Food to Review</h1>
          <div class="submit-box">
            <div class="submit-labels">
              <label for="name">Name:</label>
              <label for="description">Description:</label>
              <label for="image_url">Image Url:</label>
            </div>
            <div class="submit-inputs">
              <input v-model="name" name="name" type="text">
              <input v-model="description" name="description" type="text">
              <input v-model="image_url" name="image_url" type="text">
            </div>
          </div>
          <button>Add Food</button>
        </form>
        <button class="btn-close" v-on:click="close">&times;</button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Modal',
    data () {
      return {
        name: '',
        description: '',
        image_url: '',
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      addFood() {
        event.preventDefault();
        this.$emit('addFood', this.name, this.description, this.image_url);
        this.name = '';
        this.description = '';
        this.image_url = '';
        this.$emit('close');
      }
    },
  };
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  width: 500px;
  height: 300px;
}

.btn-close {
  border: none;
  position: relative;
  bottom: 46%;
  right: 1%;
  font-size: 20px;
  cursor: pointer;
  outline: none;
}

.add-food {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  text-align: left;
  margin: 0 auto;
  margin-bottom: 20px;
}

.submit-box {
  display: flex;
}

.submit-inputs {
  width: 100%;
  margin-left: 10px;
}

.submit-labels, .submit-inputs {
  display: flex;
  flex-direction: column;
}

input, label {
  margin-bottom: 20px;
}

h1 {
  padding-bottom: 5px;
  margin-left: auto;
  margin-right: auto;
}
</style>