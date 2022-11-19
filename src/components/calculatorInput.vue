<template>
  <div class="calculator-input">
    <label class="f-14" for="id">{{ label }}</label>
    <div class="calculator-input__inner mt-5">
      <input class="input p-10"
             type="number"
             :id="id"
             v-model="model"
      >
      <span class="type bold f-18">{{ type }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: [Number, String],
      required: true
    },
    type: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator-input {
  width: 100%;

  &__inner {
    position: relative;

    .input {
      background: transparent;
      border: 2px solid;
      border-image-slice: 1;
      box-shadow: 0 2px 4px 0 #0000001A;
      border-image-source: $metalLightGradient;
      border-radius: 4px;
      height: 50px;
      width: 100%;
    }

    .type {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
}
</style>