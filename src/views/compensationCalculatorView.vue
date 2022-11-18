<template>
  <div class="compensation-calculator p-100">
    <compensation-calculator-content/>
    <compensation-calculator/>
  </div>
</template>


<script>
import compensationCalculatorContent from "@/components/compensationCalculatorContent";
import compensationCalculator from "@/components/compensationCalculator";

export default {
  components: {
    compensationCalculatorContent,
    compensationCalculator
  }
}
</script>