<template>
  <div class="cb-item">
    <p class="cb-item__title">
      Рама
    </p>
    <p class="cb-item__text">
      подберите раму, которая подойдет случаю и впишется в интерьер, ведь вы же
      не просто оставляете "пальчики", а создаете предмет декора для дома и
      офиса:
    </p>
    <Borders />
  </div>
</template>

<script>
import Borders from '../components/Borders'
export default {
  components: {
    Borders,
  },
}
</script>

<style lang="scss" scoped></style>
