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
    }
  },
  methods: {
    addColors(color) {
      this.$store.state.chosenColors.push(color)
      let toRemove = this.$store.state.chosenColors.filter(
        (item, index, array) => array.indexOf(item) !== index
      )
      this.$store.state.chosenColors = this.$store.state.chosenColors.filter(
        (el) => !toRemove.includes(el)
      )
      this.$store.state.cart.splice(3, 1, {
        color: this.$store.state.chosenColors,
        price: this.$store.state.chosenColors.length >= 3 ? 10 : 0,
      })
    },
  },
  mounted() {
    this.$message('Выберите цвет отпечатков!')
    this.$store.state.router = '/colors'
  },
  updated() {
    if (this.$store.state.chosenColors.length === 1)
      this.$message('Верхнее меню теперь доступно!')
  },
}
</script>

<style lang="scss" scoped></style>
