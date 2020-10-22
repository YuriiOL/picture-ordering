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
          <strong v-if="result.length <= 0">Не выбрано</strong>
          <strong v-else>{{ result[0].name }}</strong>
        </p>
        <p class="cb-result__data">
          <span>Рама:</span>
          <strong v-if="result.length <= 1">Не выбрано</strong>
          <strong v-else>{{ result[0].name }}</strong>
        </p>
        <div class="cb-result__data">
          <span>Отпечатки:</span>
          <strong>Не выбраны</strong>
        </div>
        <div class="cb-result__object">
          <div class="cb-result__img">
            <img
              :src="result.length > 0 ? result[0].src : null"
              :alt="result.length > 0 ? result[0].name : null"
            />
          </div>
          <div class="cb-result__border">
            <img
              :src="result.length > 1 ? result[1].src : null"
              :alt="result.length > 1 ? result[1].name : null"
            />
          </div>
          <p class="cb-result__text__title ariston"></p>
          <p class="cb-result__text__name ariston"></p>
          <p class="cb-result__text__date ariston"></p>
        </div>
      </div>
      <div class="cb-result__bottom">
        <form action="" method="POST" @submit.prevent="submitHandler">
          <button class="cb-next" type="submit">Далее</button>
          <input name="result" id="" type="text" hidden="" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      result: this.$store.state.cart,
    }
  },
  methods: {
    submitHandler() {
      if (this.$route.path === '/') {
        if (this.result.length == 0) {
          this.$error('Сначала нужно выбрать картинку!')
          return
        } else {
          this.$router.push('/borders')
        }
      }
      if (this.$route.path === '/borders') {
        if (this.result.length == 1) {
          this.$error('Сначала нужно выбрать раму!')
          return
        } else {
          this.$router.push('/titles')
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
