<template>
  <div class="compensation-list mt-20">
    <div class="compensation-list__header">
      <div class="compensation-list__header__left">
        <h3 class="title f-32 bold">{{ data.title }}</h3>
        <div class="description  mt-20" v-html="data.description"></div>
      </div>
      <img :src="data.image" class="image" alt="">
    </div>
    <ul class="compensation-list__items">
      <li class="list-item description mt-20" v-for="(item,index) in data.list" :key="index">
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

    .title {
      line-height: 35px;
      letter-spacing: -0.02em;
      max-width: 60%;
    }

    .image {
      margin-left: 40px;
      width: 240px;
      height: 180px;
      border-radius: 4px;
      object-fit: cover;
    }
  }

  &__items {
    .list-item {
      position: relative;

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
}
</style>