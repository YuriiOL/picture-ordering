<template>
  <div class="cb-item-borders">
    <div
      class="cb-item-border"
      v-for="border of borders"
      :key="border.id"
      @click="
        decideBorder(border)
        addSelect(border.id)
      "
      :class="{ select: border.id == chosenBorder }"
    >
      <img
        :src="border.src"
        alt="Багетная №1"
        title="Багетная №1"
        width="120"
        height="150"
      />
      <a
        class="cb-item-border__prev fancybox gallery"
        href="./img/borders/prev.15.jpg"
        title="Багетная №15"
        rel="gal-14"
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      borders: this.$store.state.bordersData.borders,
      chosenBorder: null,
    }
  },
  methods: {
    decideBorder(element) {
      this.$store.state.cart.splice(1, 1, element)
    },
    addSelect(element) {
      this.chosenBorder = element
    },
  },
  mounted() {
    this.$message('Выберите раму!')
  },
}
</script>

<style lang="scss" scoped></style>
