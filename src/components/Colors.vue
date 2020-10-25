<template>
  <div class="cb-item-marks">
    <div class="cb-item-mark" v-for="color of colors" :key="color.id">
      <img
        :src="color.src"
        alt="BahamaBlue"
        width="136"
        height="136"
        @click="
          color.select = !color.select
          addColors(color)
        "
        v-bind:class="{ select: color.select }"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: this.$store.state.colorsData.colors,
      chosenColors: [],
    }
  },
  methods: {
    addColors(color) {
      this.chosenColors.push(color)
      let toRemove = this.chosenColors.filter(
        (item, index, array) => array.indexOf(item) !== index
      )
      this.chosenColors = this.chosenColors.filter(
        (el) => !toRemove.includes(el)
      )
      this.$store.state.cart.splice(3, 1, {
        color: this.chosenColors,
        price: this.chosenColors.length >= 3 ? 10 : 0,
      })
      console.log(this.chosenColors)
      console.log(this.$store.state.cart)
    },
  },
}
</script>

<style lang="scss" scoped></style>
