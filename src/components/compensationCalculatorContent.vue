<template>
  <div class="compensation-calculator-content">
    <h2 class="title f-40 bold">{{ content.mainTitle }}</h2>
    <div class="description  mt-20 f-18" v-html="content.description"></div>
    <compensation-list :data="compensationListData"/>
  </div>
</template>

<script>
import compensationList from '@/components/compensationList.vue'

export default {
  name: 'compensationCalculatorContent',
  data() {
    return {
      content: {
        mainTitle: 'Quam Tristique Condimentum',
        description: '<span>Duis mollis, est non commodo luctus, nisi erat porttitor ligula,' +
            ' eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis ' +
            'parturient montes, nascetur ridiculus mus. <a>Curabitur blandit</a> tempus porttitor.' +
            ' Integer posuere erat a ante venenatis dapibus posuere velit aliquet. ' +
            'Vestibulum id ligula porta felis euismod semper.</span>  ',

      },
      compensationListData: {
        title: 'Fringilla Euismod Adipiscing Ipsum',
        description: '<span>Cum sociis natoque penatibus et magnis dis parturient montes,' +
            ' nascetur ridiculus mus. Maecenas ' +
            'faucibus mollis interdum. ' +
            'Aenean lacinia bibendum nulla sed.</span>',
        image: require('@/assets/images/compensation.png'),
        list: [
          {
            title: 'Tellus Ullamcorper Inceptos',
          },
          {
            title: 'Magna Condimentum',
            childrenList: [
              {
                title: 'Mattis Tristique',
              },
              {
                title: 'Pharetra Pellentesque Dapibus',
              },
            ]
          },
          {
            title: 'Aenean Inceptos',
          },
          {
            title: 'Parturient Bibendum',
          },
        ]
      }
    }
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
