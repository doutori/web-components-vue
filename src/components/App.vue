<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <button-red @click="countUp">Vue Component</button-red>
    <wc-button-red @click="countUp">Web Components</wc-button-red>
    <div class="count">count:{{count}}</div>
  </div>
</template>

<script>
import ButtonRed from './ButtonRed.vue';
export default {
  name: 'app',
  components: {
    ButtonRed,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0,
    }
  },
  methods: {
    countUp() {
      this.count++;
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
}

.count {
  margin: 20px 0;
}
</style>
