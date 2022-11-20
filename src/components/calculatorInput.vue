<template>
  <div class="calculator-input mt-20">
    <label class="f-14" :for="id">{{ label }}</label>
    <div class="calculator-input__inner mt-5">
      <input class="input p-10"
             type="number"
             :id="id"
             v-model="model"
             @input="input"
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
      type: [Number, String],
    },
    restrictValue: {
      type: Function
    }
  },
  data() {
    return {
      model: null
    }
  },
  methods: {
    input() {
      this.model = this.restrictValue ? this.restrictValue(this.model) : this.model

      this.$emit('input', this.model)
    }
  },
  watch: {
    value(val) {
      if (this.model !== val) this.model = val
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator-input {
  width: 100%;

  &__inner {
    position: relative;
    background-image: linear-gradient(white, white), $metalLightGradient;
    background-origin: border-box;
    background-clip: content-box, border-box;
    border: 2px solid transparent;
    border-radius: 4px;

    .input {
      background: transparent;
      height: 46px;
      width: 100%;
      border: unset;
      -moz-appearance: textfield;

      &::-webkit-inner-spin-button, &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
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