<template>
  <div class="home">
    <router-link
        class="bold f-32"
        to="/compensation-calculator">Compensation Calculator
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  a {
    color: $white;
  }
}
</style>
