<template>
  <div class="compensation-calculator">
    <h2 class="title f-24 bold">Compensation Calculator</h2>
    <calculator-input
        v-for="item in inputs"
        :label="item.label"
        :id="item.id"
        :key="item.id"
        :type="item.type"
        :error="item.error"
        :restrictValue="item.restrictValue"
        v-model="item.model"
        @input="setErrors(item)"
    />
    <calculator-checkbox label="I have tuberculosis"
                         @input="checkBoxEvent"
                         id="tuberculosis"/>
    <calculator-button :clickEvent="calculate"
                       title="Calculate"/>
    <compensation-calculator-result/>
  </div>
</template>

<script>
import calculatorInput from "@/components/calculatorInput";
import calculatorButton from "@/components/calculatorButton";
import calculatorCheckbox from "@/components/calculatorCheckbox";
import compensationCalculatorResult from "@/components/compensationCalculatorResult";
import {mapActions, mapGetters} from "vuex";
import minMax from "@/mixins/minMax";
import {
  INSURANCE_MAXIMUM_DURATION,
  INSURANCE_MAXIMUM_DURATION_WITH_TUBERCULOSIS
} from "@/constants/calculator-constants";

export default {
  mixins: [minMax],
  data() {
    return {
      inputs: [
        {
          label: 'Average income',
          id: 'income',
          type: "€",
          model: 0,
          error: false
        },
        {
          label: 'Days on sick-leave',
          id: 'sickLeaveDays',
          type: "days",
          model: 0,
          restrictValue: this.sickDaysRestriction,
          error: false
        },
      ]
    }
  },
  components: {
    calculatorInput,
    calculatorButton,
    calculatorCheckbox,
    compensationCalculatorResult
  },
  computed: {
    ...mapGetters({
      calculatorData: 'compensationCalculator/calculatorData',
      tuberculosis: 'compensationCalculator/tuberculosis'
    }),
    isFormValidate() {
      return this.inputs.filter(item => item.model)?.length === this.inputs.length
    }
  },
  methods: {
    ...mapActions({
      setCalculatorData: 'compensationCalculator/setCalculatorData',
      setTuberculosis: 'compensationCalculator/setTuberculosis'
    }),
    sickDaysRestriction(value) {
      return this.tuberculosis ? this.minMax(value, 0, INSURANCE_MAXIMUM_DURATION_WITH_TUBERCULOSIS) :
          this.minMax(value, 0, INSURANCE_MAXIMUM_DURATION)
    },
    setErrors(inputItem) {
      if (inputItem) {
        if (inputItem?.error === true && inputItem.model) inputItem.error = false
        if (!inputItem.model) inputItem.error = true

        return
      }

      this.inputs?.forEach(item => {
        if (!item.model) item.error = true
      })
    },
    calculate() {
      if (!this.isFormValidate) {
        this.setErrors()

        return
      }

      let calculatorData = this.inputs.map(item => item.id).reduce((accumulator, value, index) => {
        return {...accumulator, [value]: this.inputs[index].model};
      }, {});

      this.setCalculatorData(calculatorData)
    },
    checkBoxEvent(value) {
      this.setTuberculosis(value)

      let daysInput = this.inputs[1]

      if (daysInput.model && daysInput.model === INSURANCE_MAXIMUM_DURATION_WITH_TUBERCULOSIS)
        daysInput.model = this.sickDaysRestriction(daysInput.model)
    }
  }
}
</script>

<style lang="scss" scoped>
.compensation-calculator {
  min-width: 320px;
  background: #FFFFFF;
  padding: 80px 20px;
  color: $metalDark;
  margin-left: 100px;
  clip-path: polygon(
          0 20px,
          20px 0,
          calc(100% - 20px) 0,
          100% 20px,
          100% calc(100% - 20px),
          calc(100% - 20px) 100%,
          20px 100%,
          0% calc(100% - 20px),
          0% 20px
  );
  height: fit-content;
  @include mq(tablet) {
    margin-left: 50px;
  }
  @include mq(tablet-sm) {
    margin-left: 0;
    margin-top: 40px;
  }
  @include mq(mobile) {
    padding: 40px 10px;
    min-width: 280px;
  }

  .title {
    line-height: 25px;
    letter-spacing: -0.02em;
  }
}
</style>