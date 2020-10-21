<template>
  <div class="cb-item-pics">
    <div
      class="cb-item-pic"
      v-for="picture of pictures"
      :key="picture.id"
      @click="
        decidePicture(picture)
        addSelect(picture.id)
      "
      :class="{ select: picture.id == chosenPicture }"
    >
      <img
        :src="picture.src"
        :alt="picture.name"
        :title="picture.name"
        width="176"
        height="220"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pictures: this.$store.state.picturesData.pictures,
      chosenPicture: null,
    }
  },
  methods: {
    decidePicture(element) {
      this.$store.state.cart.splice(0, 1, element)
    },
    addSelect(element) {
      this.chosenPicture = element
    },
  },
  mounted() {
    this.$message('Выберите картину!')
  },
}
</script>

<style lang="scss" scoped></style>
