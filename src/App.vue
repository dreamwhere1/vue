<template>
<transition name="component-fade" mode="out-in">
  <keep-alive include="Index">
    <router-view></router-view>
  </keep-alive>
</transition>
</template>

<style lang="scss" scoped>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .2s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
