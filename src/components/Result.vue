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
          <strong v-else>{{ result[1].name }}</strong>
        </p>
        <div class="cb-result__data">
          <span
            >Отпечатки:
            <span v-if="result.length > 3">
              <img
                class="colors"
                :src="chco.minColors"
                alt=""
                v-for="chco of result[3].color"
                :key="chco.id"
              />
            </span>
            <strong v-else>Не выбраны</strong></span
          >
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
          <p
            class="cb-result__text__title"
            v-if="result.length >= 3"
            :class="result[2].font"
          >
            {{ result[2].title }}
          </p>
          <p
            class="cb-result__text__name"
            v-if="result.length >= 3"
            :class="result[2].font"
          >
            {{ result[2].signature }}
          </p>
          <p
            class="cb-result__text__date"
            v-if="result.length >= 3"
            :class="result[2].font"
          >
            {{ result[2].date }}
          </p>
        </div>
      </div>
      <div class="cb-result__bottom">
        <form action="" method="POST" @submit.prevent="submitHandler">
          <button class="cb-next" type="submit">
            Далее
          </button>
          <input name="result" id="" type="text" hidden="" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      result: this.$store.state.cart,
    }
  },
  computed: {
    ...mapGetters(['title', 'signature', 'date', 'font']),
  },
  methods: {
    ...mapMutations(['submitTitles']),
    submitHandler() {
      if (this.$route.path === '/') {
        if (this.result.length == 0) {
          this.$error('Сначала нужно выбрать картинку!')
          return
        } else {
          this.$router.push('/borders')
          this.$message('Выберите раму!')
        }
      }
      if (this.$route.path === '/borders') {
        if (this.result.length == 1) {
          this.$error('Сначала нужно выбрать раму!')
          return
        } else {
          this.$router.push('/titles')
          this.$message('Введите данные на этой странице, и выберите шрифт!')
        }
      }
      if (this.$route.path === '/titles') {
        if (
          this.result.length == 2 ||
          this.title == '' ||
          this.signature == '' ||
          this.date == '' ||
          this.font == ''
        ) {
          this.$error('Сначала нужно ввести все данные, и выбрать шрифт!')
          return
        } else {
          this.submitTitles()
          this.$router.push('/colors')
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: Ariston;
  src: url('../assets/fonts/ariston/ariston-webfont.ttf') format('truetype');
}
@font-face {
  font-family: Brody;
  src: url('../assets/fonts/brody/jabgndg5-webfont.ttf') format('truetype');
}
@font-face {
  font-family: DaVinci;
  src: url('../assets/fonts/davinci/davinci-webfont.ttf') format('truetype');
}
.Ariston {
  font-family: Ariston;
}
.Brody {
  font-family: Brody;
}
.DaVinci {
  font-family: DaVinci;
}
.colors {
  width: 13px;
  height: 13px;
  margin-right: 2px;
  border-radius: 3px;
}
</style>
