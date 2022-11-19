<template>
  <button class="calculator-button bold f-18 mt-20" @click="clickEvent">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    clickEvent: {
      type: Function,
      default: () => {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator-button {
  background: $redGradient;
  padding: 20px 40px;
  color: $white;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
  line-height: 20px;
  border-radius: 30px;
}
</style>