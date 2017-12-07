<template>
  <button @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'button-red',
  methods: {
    click() {
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
