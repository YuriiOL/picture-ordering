<template>
  <div class="cb-item">
    <p class="cb-item__title">
      Выберите изображение
    </p>
    <p class="cb-item__text">
      для начала выберите основу, саму картину, на которую вы и гости вашего
      праздника будете наносить отпечатки пальцев с пожеланиями
    </p>
    <Pictures />
  </div>
</template>

<script>
import Pictures from '../components/Pictures'
export default {
  components: {
    Pictures,
  },
}
</script>

<style lang="scss" scoped></style>
