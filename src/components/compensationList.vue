<template>
  <div class="compensation-list mt-20">
    <div class="compensation-list__header">
      <div class="compensation-list__header__left">
        <h3 class="title f-32 bold">{{ data.title }}</h3>
        <div class="description f-18 mt-20" v-html="data.description"></div>
      </div>
      <img :src="data.image" class="image" alt="">
    </div>
    <ul class="compensation-list__items pl-25">
      <li class="list-item description f-18 mt-20" v-for="(item,index) in data.list" :key="index">
        {{ item.title }}
        <ul v-if="item.childrenList" class="children-list">
          <li v-for="(children,k) in item.childrenList" :key="k" class="children-item mt-20">{{ children.title }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.compensation-list {
  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @include mq(mobile) {
      flex-direction: column;
    }

    .title {
      line-height: 35px;
      letter-spacing: -0.02em;
      max-width: 80%;
      @include mq(tablet) {
        max-width: 100%;
      }
    }

    .description {
      line-height: 30px;
      @include mq(mobile) {
        line-height: 24px;
      }
    }

    .image {
      margin-left: 40px;
      width: 240px;
      height: 180px;
      border-radius: 4px;
      object-fit: cover;
      @include mq(tablet) {
        margin-left: 30px;
      }
      @include mq(mobile) {
        margin-left: 0;
        margin-top: 20px;
      }
    }
  }

  &__items {
    .list-item {
      position: relative;
      animation: lideLeft .55s $easeIn forwards;
      opacity: 0;
      transform: translateX(-10px);

      @for $i from 1 through 4 {
        &:nth-child( #{$i}) {
          animation-delay: $i/5+s
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 16px;
        height: 4px;
        background: $redGradient;
        top: 10px;
        left: -9px;
        transform: translate(-100%, 0);
      }

      .children-list {
        padding-left: 25px;

        .children-item {
          position: relative;

          &:before {
            content: '';
            position: absolute;
            width: 12px;
            height: 4px;
            background: $metalLightGradient;
            top: 10px;
            left: -13px;
            transform: translate(-100%, 0);
          }
        }
      }
    }
  }

  @keyframes lideLeft {
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>