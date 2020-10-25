<template>
  <div class="cb-item">
    <p class="cb-item__title">
      Цвет отпечатков
    </p>
    <p class="cb-item__text">
      наконец, подберите самые подходящие цвета красок, с помощью которых вы и
      оставите на картине свой след на память!<br />
      <strong>Обратите внимание: более 2-х цветов увеличат стоимость</strong>
    </p>
    <Colors />
  </div>
</template>

<script>
import Colors from '../components/Colors'
export default {
  components: {
    Colors,
  },
}
</script>

<style lang="scss" scoped></style>
