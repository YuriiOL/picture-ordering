<template>
  <div>
    <div class="cb-result">
      <div class="cb-result__title">
        <p>Ваша картина</p>
      </div>
      <div class="cb-result__content">
        <p class="cb-result__data">
          <span>Изображение:</span>
          <strong></strong>
          <strong v-if="piscture.length === 0">Не выбрано</strong>
          <strong v-else>{{ piscture[0].name }}</strong>
        </p>
        <p class="cb-result__data">
          <span>Рама:</span>
          <strong></strong>
          <strong>Не выбрано</strong>
        </p>
        <div class="cb-result__data">
          <span>Отпечатки:</span>
          <strong>Не выбраны</strong>
        </div>
        <div class="cb-result__object">
          <div class="cb-result__img">
            <img
              :src="piscture.length > 0 ? piscture[0].src : null"
              :alt="piscture.length > 0 ? piscture[0].name : null"
            />
          </div>
          <div class="cb-result__border"></div>
          <p class="cb-result__text__title ariston"></p>
          <p class="cb-result__text__name ariston"></p>
          <p class="cb-result__text__date ariston"></p>
        </div>
      </div>
      <div class="cb-result__bottom">
        <form action="" method="POST">
          <p class="cb-next">Далее</p>
          <input name="result" id="" type="text" hidden="" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      piscture: this.$store.state.cart,
    }
  },
}
</script>

<style lang="scss" scoped></style>
