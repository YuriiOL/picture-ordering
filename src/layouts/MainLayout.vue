<template>
  <main>
    <div class="container_12">
      <div class="grid_12">
        <div id="constructor" class="constructor-block">
          <TopLine />
          <Resulte />
          <div class="cb-wrapper">
            <div id="cb-items" class="cb-item1">
              <transition name="slide" mode="out-in">
                <router-view :key="$route.path" />
              </transition>
            </div>
          </div>
          <BottomLine />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import TopLine from '../components/TopLine'
import Resulte from '../components/Result'
import BottomLine from '../components/BottomLine'
export default {
  components: {
    TopLine,
    Resulte,
    BottomLine,
  },
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
