<template>
  <transition name="text" mode="out-in">
    <span :key="value">
      {{ value }}
    </span>
  </transition>
</template>


<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.text-enter-active,
.text-leave-active {
  transition: opacity .5s cubic-bezier(0,.17,.19,.99);
}

.text-enter-from,
.text-leave-to {
  opacity: 0;
}
</style>