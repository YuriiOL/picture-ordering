<template>
  <main>
    <div class="container_12">
      <div class="grid_12">
        <div id="constructor" class="constructor-block">
          <TopLine />
          <Resulte />
          <div class="cb-wrapper">
            <div id="cb-items" class="cb-item1">
              <router-view />
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

<style lang="scss" scoped></style>
