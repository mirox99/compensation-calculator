<template>
  <div id="app" class="app">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/compensation-calculator">Compensation Calculator</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
.app {

}
</style>
