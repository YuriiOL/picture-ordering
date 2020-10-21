<template>
  <div class="cb-bottom-line">
    <div class="cb-total">
      <span class="cb-total__text">Стоимость:</span
      ><span class="cb-total__amount">
        {{
          this.$store.getters.cart.length == 0
            ? 0
            : carts.map((item) => item.price).reduce((a, b) => a + b, 0)
        }}</span
      >
      <span class="cb-total__currency"> грн</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carts: this.$store.getters.cart,
    }
  },
}
</script>

<style lang="scss" scoped></style>
