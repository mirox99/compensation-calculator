<template>
  <div id="app" class="app">
    <transition name="route">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
.app {
  .route-enter-active,
  .route-leave-active {
    transition: opacity .35s $easeIn;
  }

  .route-enter-from,
  .route-leave-to {
    opacity: 0;
  }
}
</style>
