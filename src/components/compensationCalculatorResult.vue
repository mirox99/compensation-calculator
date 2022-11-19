<template>
  <div class="compensation-calculator-result mt-40">
    <div class="compensation-calculator-result__up pseudo-line">
      <div class="compensation-calculator-result__up__item">
        <span class="title f-14">The employer compensates</span>
        <span class="number bold f-14">4 days</span>
        <span class="number bold mt-10 f-18">112,00€</span>
        <span class="description f-12">Daily allowance 28,00 €</span>
      </div>
      <div class="compensation-calculator-result__up__item">
        <span class="title f-14">Health Insurance compensates</span>
        <span class="number bold f-14">0 days</span>
        <span class="number bold mt-10 f-18">0,00€</span>
        <span class="description f-12">Daily allowance 28,00 €</span>
      </div>
    </div>
    <div class="compensation-calculator-result__total mt-40 pseudo-line">
      <span class="title f-14">Compensation total for 7 days (net)</span>
      <span class="number bold f-24 mt-5">112,00€</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.compensation-calculator-result {

  .pseudo-line {
    &:before {
      content: '';
      left: -20px;
      position: absolute;
      width: calc(100% + 40px);
      height: 1px;
      background: $metalLight;
      top: -20px;
    }

  }

  span {
    display: block;
    text-align: center;
  }

  &__up {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;

    &__item {
      width: calc(50% - 10px);
    }
  }

  &__total {
    position: relative;


  }
}
</style>