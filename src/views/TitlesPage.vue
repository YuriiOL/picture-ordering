<template>
  <form class="cb-item" @submit="submitHandler">
    <p class="cb-item__title">
      Заголовок
    </p>
    <p class="cb-item__text">
      персонализируйте ваше "Дерево пожеланий"; вверху и внизу картины есть
      специальные поля, которые можно заполнить по вашему усмотрению: вписать
      имена виновников торжества, или особые пожелания, добавить дату, или
      логотип компании, если речь идет о корпоративном подарке.
    </p>
    <div class="cb-item__line">
      <input
        id="pic-title"
        placeholder="Наша Свадьба"
        maxlength="22"
        type="text"
        v-model="title"
        :class="{ invalid: $v.title.$dirty && !$v.title.required }"
      />
      <span>Заголовок картины</span>
    </div>
    <div class="cb-item__line">
      <input
        id="pic-name"
        placeholder="Анастасия и Константин"
        maxlength="36"
        type="text"
        v-model="signature"
        :class="{ invalid: $v.signature.$dirty && !$v.signature.required }"
      />
      <span>Подпись</span>
    </div>
    <div class="cb-item__line">
      <input
        id="pic-date"
        placeholder="29 июля 2015"
        maxlength="26"
        type="text"
        v-model="date"
        :class="{ invalid: $v.date.$dirty && !$v.date.required }"
      />
      <span>Дата события</span>
    </div>
    <div class="cb-item__line--btns">
      <button
        id="ariston"
        class="btn-font"
        type="submit"
        @click="addTitles($event)"
        :class="{ Ariston: font == ' Ariston ' }"
      >
        Ariston
      </button>
      <button
        id="davinci"
        class="btn-font"
        type="submit"
        @click="addTitles($event)"
        :class="{ Ariston: font == ' DaVinci ' }"
      >
        DaVinci
      </button>
      <button
        id="brody"
        class="btn-font"
        type="submit"
        @click="addTitles($event)"
        :class="{ Ariston: font == ' Brody ' }"
      >
        Brody
      </button>
    </div>
  </form>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      title: '',
      signature: '',
      date: '',
      font: '',
      titles: null,
    }
  },
  validations: {
    title: { required },
    signature: { required },
    date: { required },
  },
  methods: {
    addTitles(e) {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.font = e.path[0].innerHTML
    },
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.titles = {
        title: this.title,
        signature: this.signature,
        date: this.date,
        font: this.font,
        price: 0,
      }
      this.$store.state.cart.splice(2, 1, this.titles)
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.btn-font {
  font-family: FS-regular;
  border: none;
  display: inline-block;
  height: 40px;
  width: 100px;
  margin-right: 10px;
  -webkit-border-radius: 16px;
  border-radius: 16px;
  color: #8dbc55;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  -webkit-box-shadow: 0 0 0 1px #8dbc55 inset;
  box-shadow: 0 0 0 1px #8dbc55 inset;
  background-color: #fff;
  cursor: pointer;
}
.btn-font:last-child {
  margin-right: 0;
}

.Ariston {
  color: #fff;
  background-color: #8dbc55;
}
.Brody {
  color: #fff;
  background-color: #8dbc55;
}
.DaVinci {
  color: #fff;
  background-color: #8dbc55;
}
</style>
