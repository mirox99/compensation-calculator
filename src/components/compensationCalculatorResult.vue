<template>
  <div class="compensation-calculator-result mt-40">
    <div class="compensation-calculator-result__up pseudo-line">
      <div class="compensation-calculator-result__up__item">
        <span class="title line-15 f-14">The employer compensates</span>
        <div class="number flex-center bold line-15 f-14">
          <text-transition :value="employerCompensationDays"/>
          <span class="pl-3">days</span>
        </div>
        <div class="number bold line-20 mt-10 f-18">
          <text-transition :value="employerCompensationMoney|moneyFormat"/>
        </div>
        <span class="description line-15 f-12">Daily allowance 28,00 €</span>
      </div>
      <div class="compensation-calculator-result__up__item">
        <span class="title line-15 f-14">Health Insurance compensates</span>
        <div class="number flex-center bold line-15 f-14">
          <text-transition :value="insuranceCompensationDays"/>
          <span class="pl-3">days</span>
        </div>
        <span class="number bold mt-10 line-20 f-18">
                         <text-transition :value="insuranceCompensationMoney|moneyFormat"/>
        </span>
        <span class="description f-12">Daily allowance 28,00 €</span>
      </div>
    </div>
    <div class="compensation-calculator-result__total mt-40 pseudo-line">
      <div class="title line-15 flex f-14">Compensation total for
        <text-transition :value="totalCompensationDays"/>
        days (net)
      </div>
      <div class="number bold line-30 f-24 mt-5">
        <text-transition :value="totalCompensationMoney|moneyFormat"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import minMax from "@/mixins/minMax";
import textTransition from "@/components/textTransition";

export default {
  mixins: [minMax],
  components: {
    textTransition
  },
  filters: {
    moneyFormat: function (value) {
      const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
      });

      return formatter.format(value)
    }
  },
  computed: {
    ...mapGetters({
      calculatorData: 'compensationCalculator/calculatorData'
    }),
    employerCompensationDays() {
      return this.minMax(this.calculatorData.sickLeaveDays - 3, 0, 5)
    },
    employerCompensationMoney() {
      return this.employerCompensationDays * 28
    },
    insuranceCompensationDays() {
      return this.minMax(this.calculatorData.sickLeaveDays - 8, 0)
    },
    insuranceCompensationMoney() {
      return this.insuranceCompensationDays * 28
    },
    totalCompensationMoney() {
      return this.employerCompensationMoney + this.insuranceCompensationMoney
    },
    totalCompensationDays() {
      return this.insuranceCompensationDays + this.employerCompensationDays
    },
  }
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
      @include mq(mobile) {
        left: -10px;
        width: calc(100% + 20px);
      }
    }

  }

  span {
    display: block;
    text-align: center;
  }

  .line-15 {
    line-height: 15px;
  }

  .line-20 {
    line-height: 20px;
  }

  .line-30 {
    line-height: 30px;
  }

  &__up {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;

    &__item {
      width: calc(50% - 10px);

      .description {
        color: $metalMiddle;
      }
    }
  }

  &__total {
    position: relative;

    .title {
      span {
        margin: 0 3px;
      }
    }

  }
}
</style>