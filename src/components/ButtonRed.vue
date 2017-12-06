<template>
  <button @click="alert">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-red',
  methods: {
    alert() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scope>
  button {
    font-size: 16px;
    font-weight: bold;
    background-color: palevioletred;
    color: #fff;
    padding: 1em 3em;
    cursor: pointer;
    border: none;
  }
</style>
