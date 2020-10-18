<template>
  <div class="cb-item">
    <p class="cb-item__title">
      Заголовок
    </p>
    <p class="cb-item__text">
      персонализируйте ваше "Дерево пожеланий"; вверху и внизу картины есть специальные поля,
      которые можно заполнить по вашему усмотрению: вписать имена виновников торжества, или
      особые пожелания, добавить дату, или логотип компании, если речь идет о корпоративном
      подарке.
    </p>
    <div class="cb-item__line">
      <input id="pic-title" placeholder="Наша Свадьба" maxlength="22" type="text">
      <span>Заголовок картины</span>

    </div>
    <div class="cb-item__line">
      <input id="pic-name" placeholder="Анастасия и Константин" maxlength="36" type="text">
      <span>Подпись</span>
    </div>
    <div class="cb-item__line">
      <input id="pic-date" placeholder="29 июля 2015" maxlength="26" type="text">
      <span>Дата события</span>
    </div>
    <div class="cb-item__line--btns">
      <span id="ariston" class="btn-font btn-font--active">
        Ariston
      </span>
      <span id="davinci" class="btn-font">
        DaVinci
      </span>
      <span id="brody" class="btn-font">
        Brody
      </span>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>