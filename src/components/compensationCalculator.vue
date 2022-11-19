<template>
  <div class="compensation-calculator">
    <h2 class="title f-24 bold">Compensation Calculator</h2>
    <calculator-input v-for="item in inputs"
                      :label="item.label"
                      :id="item.id"
                      :key="item.id"
                      :type="item.type"
    />
    <calculator-button title="Calculate"/>
  </div>
</template>

<script>
import calculatorInput from "@/components/calculatorInput";
import calculatorButton from "@/components/calculatorButton";

export default {
  data() {
    return {
      inputs: [
        {
          label: 'Average income',
          id: 'income',
          type: "€",
        },
        {
          label: 'Days on sick-leave',
          id: 'sickLeaveDays',
          type: "days"
        },
      ]
    }
  },
  components: {
    calculatorInput,
    calculatorButton
  }
}
</script>

<style lang="scss" scoped>
.compensation-calculator {
  min-width: 320px;
  background: #FFFFFF;
  padding: 80px 20px;
  color: $metalDark;

  .title {
    line-height: 25px;
    letter-spacing: -0.02em;
  }
}
</style>