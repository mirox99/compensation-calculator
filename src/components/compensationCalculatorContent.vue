<template>
  <div class="compensation-calculator-content">
    <h2 class="title f-40 bold">{{ content.mainTitle }}</h2>
    <div class="description  mt-20 f-18" v-html="content.description"></div>
    <compensation-list :data="compensationListData"/>
  </div>
</template>

<script>
import compensationList from '@/components/compensationList.vue'
import {mapGetters} from "vuex";

export default {
  name: 'compensationCalculatorContent',
  computed: {
    ...mapGetters({
      content: 'compensationCalculatorContent/content',
      compensationListData: 'compensationCalculatorContent/compensationListData',
    })
  },
  components: {
    compensationList
  }
}
</script>

<style scoped lang="scss">
.compensation-calculator-content {
  .title {
    line-height: 50px;
    letter-spacing: -0.02em;
    @include mq(mobile) {
      line-height: 43px;
    }
  }

  .description::v-deep {
    line-height: 30px;
    @include mq(mobile) {
      line-height: 24px;
    }

    a {
      color: $red;
      text-decoration: underline;
      cursor: pointer;
    }
  }

}
</style>
