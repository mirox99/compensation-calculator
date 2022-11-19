<template>
  <div class="calculator-checkbox mt-20">
    <label class="calculator-checkbox__inner f-14">
      <span class="f-14">{{ label }}</span>
      <input class="input" type="checkbox">
      <div class="checkmark">
        <img src="../assets/images/check.svg" class="icon" alt="">
      </div>
    </label>
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
.calculator-checkbox {
  width: 100%;

  &__inner {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 20px;

    .input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ .checkmark {
        background-color: #2196F3;

        .icon {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 20px;
      background-color: $white;
      border: 2px solid transparent;
      border-radius: 2px;
      background-image: linear-gradient(white, white),
      $metalLightGradient;
      background-origin: border-box;
      background-clip: content-box, border-box;

      .icon {
        position: absolute;
        right: 0;
        top: 3px;
        transition: all .45s cubic-bezier(.23, -0.01, .21, 1);
        opacity: 0;
        transform: translateY(3px);
      }
    }
  }
}
</style>