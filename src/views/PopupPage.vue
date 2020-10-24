<template>
  <div>
    <router-link class="X" :to="this.$route.query.route">X</router-link>
    <div class="popupWrapper">
      <img :src="border.popup[i]" :alt="border.name" @click="nextPicuture" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      i: 0,
      border: this.$route.query.border,
    }
  },
  methods: {
    nextPicuture() {
      this.i++
      if (this.i === this.border.popup.length) {
        this.$router.push(this.$route.query.route)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
.popupWrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.X {
  float: right;
}
</style>
