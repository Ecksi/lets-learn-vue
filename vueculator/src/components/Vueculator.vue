<template>
  <div class="calculator">
    <div class="button display">{{current || '0'}}</div>
    <div @click="clear" class="button">AC</div>
    <div @click="sign" class="button">+/-</div>
    <div @click="percent" class="button">%</div>
    <div @click="divide" class="button operator">&divide;</div>
    <div @click="append('7')" class="button">7</div>
    <div @click="append('8')" class="button">8</div>
    <div @click="append('9')" class="button">9</div>
    <div @click="multiply" class="button operator">&times;</div>
    <div @click="append('4')" class="button">4</div>
    <div @click="append('5')" class="button">5</div>
    <div @click="append('6')" class="button">6</div>
    <div @click="subtract" class="button operator">&minus;</div>
    <div @click="append('1')" class="button">1</div>
    <div @click="append('2')" class="button">2</div>
    <div @click="append('3')" class="button">3</div>
    <div @click="add" class="button operator">&plus;</div>
    <div @click="append('0')" class="button zero">0</div>
    <div @click="dot" class="button">.</div>
    <div @click="equal" class="button operator">&equals;</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        previous: null,
        current: '',
        operator: null,
        operatorClicked: false,
      }
    },
    methods: {
      clear() {
        this.current = '';
      },
      sign() {
        this.current = this.current[0] === '-' ? this.current.slice(1) : `-${this.current}`;
      },
      percent() {
        this.current = `${parseFloat(this.current) / 100}`;
      },
      append(number) {
        this.current = `${this.current}${number}`;
      },
      dot() {
        if (this.current.indexOf('.') === -1) {
          this.append('.');
        }
      },
      setPrevious() {
        this.previous = this.current;
        this.current = '';
        this.operatorClicked = true;
      },
      divide() {
        this.operator = (a, b) => a / b;
        this.setPrevious();
      },
      multiply() {
        this.operator = (a, b) => a * b;
        this.setPrevious();
      },
      subtract() {
        this.operator = (a, b) => a - b;
        this.setPrevious();
      },
      add() {
        this.operator = (a, b) => a + b;
        this.setPrevious();
      },
      equal() {
        this.current = `${this.operator(
          parseFloat(this.current),
          parseFloat(this.previous)
        )}`;
        this.previous = null;
      },
    }
  }
</script>

<style scoped>
  .calculator {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(50px, auto);
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    font-size: 40px;
  }

  .button {
    background-color: #EEE;
    border: 1px solid #999;
  }

  .display {
    grid-column: 1 / 5;
    background-color: lightsalmon;
    height: 60px;
    padding-top: 10px;
  }

  .operator {
    background-color: orange;
    color: white;
  }
  
  .zero {
    grid-column: 1 / 3;
  }
</style>
