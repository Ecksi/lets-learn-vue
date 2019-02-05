<template>
  <div class="header">
    <div class="modal-container">
      <button type="button" class="add-food" @click="showModal">Add Food</button>
      <Modal @addFood="addFood" v-show="isModalVisible" @close="closeModal"/>
    </div>
    <h2>Free 9er Food Feedback</h2>
  </div>
</template>

<script>
import Modal from '../atoms/Modal';

export default {
  name: 'AppHeader',
  components: {
    Modal,
  },
  data () {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    addFood(name, desc, image) {
      this.$emit('addFood', name, desc, image);
    }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 660px;
  margin: 0 auto;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.add-food {
  border: none;
  cursor: pointer;
  width: 125px;
  font-size: 18px;
  font-weight: lighter;
  outline: none;
}

.modal-container {
  display: flex;
  flex-direction: column-reverse;
}

h1 {
  text-align: right;
  width: 100%;
}
</style>