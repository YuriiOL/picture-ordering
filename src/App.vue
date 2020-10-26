<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <component :is="layout"> <router-view :key="$route.path" /> </component>
    </transition>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import PopupLayout from './layouts/PopupLayout'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'popup') + '-layout'
    },
  },
  components: {
    MainLayout,
    PopupLayout,
  },
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import './assets/css/style.css';
</style>
