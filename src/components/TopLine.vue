<template>
  <div class="cb-top-line">
    <div
      class="cb-step"
      data-step="cb-item1"
      id="cb-step1"
      :class="{
        'cb-step--current': this.$router.history.current.path === '/',
      }"
    >
      <p>
        <span>1</span>
        Изображение
      </p>
    </div>
    <div
      class="cb-step"
      data-step="cb-item2"
      id="cb-step2"
      :class="{
        'cb-step--current': this.$router.history.current.path == '/borders',
      }"
    >
      <p>
        <span>2</span>
        Рама
      </p>
    </div>
    <div
      class="cb-step"
      data-step="cb-item3"
      id="cb-step3"
      :class="{
        'cb-step--current': this.$router.history.current.path == '/titles',
      }"
    >
      <p>
        <span>3</span>
        Заголовок
      </p>
    </div>
    <div
      class="cb-step"
      data-step="cb-item4"
      id="cb-step4"
      :class="{
        'cb-step--current': this.$router.history.current.path == '/colors',
      }"
    >
      <p>
        <span>4</span>
        Цвет отпечатков
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentClass: { class: 'cb-step--current' },
    }
  },
  mounted() {
    console.log(this.$router.history.current.path)
  },
}
</script>

<style lang="scss" scoped></style>
