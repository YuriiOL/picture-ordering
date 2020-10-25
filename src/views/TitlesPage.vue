<template>
  <form class="cb-item" @submit.prevent="submitTitles">
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
        v-model="$store.state.title"
      />
      <span>Заголовок картины</span>
    </div>
    <div class="cb-item__line">
      <input
        id="pic-name"
        placeholder="Анастасия и Константин"
        maxlength="36"
        type="text"
        v-model="$store.state.signature"
      />
      <span>Подпись</span>
    </div>
    <div class="cb-item__line">
      <input
        id="pic-date"
        placeholder="29 июля 2015"
        maxlength="26"
        type="text"
        v-model="$store.state.date"
      />
      <span>Дата события</span>
    </div>
    <div class="cb-item__line--btns">
      <button
        id="ariston"
        class="btn-font"
        type="submit"
        @click="addTitles($event)"
        :class="{ Ariston: $store.state.font == ' Ariston ' }"
      >
        Ariston
      </button>
      <button
        id="davinci"
        class="btn-font"
        type="submit"
        @click="addTitles($event)"
        :class="{ Ariston: $store.state.font == ' DaVinci ' }"
      >
        DaVinci
      </button>
      <button
        id="brody"
        class="btn-font"
        type="submit"
        @click="addTitles($event)"
        :class="{ Ariston: $store.state.font == ' Brody ' }"
      >
        Brody
      </button>
    </div>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['addTitles', 'submitTitles']),
  },
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
