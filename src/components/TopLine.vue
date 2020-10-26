<template>
  <div>
    <div class="cb-top-line" v-if="$store.state.cart.length === 4">
      <router-link to="/">
        <div
          class="cb-step"
          data-step="cb-item1"
          id="cb-step1"
          :class="{
            'cb-step--current': $store.state.router === '/',
          }"
        >
          <p>
            <span>1</span>
            Изображение
          </p>
        </div>
      </router-link>
      <router-link to="/borders">
        <div
          class="cb-step"
          data-step="cb-item2"
          id="cb-step2"
          :class="{
            'cb-step--current': $store.state.router == '/borders',
          }"
        >
          <p>
            <span>2</span>
            Рама
          </p>
        </div></router-link
      >

      <router-link to="/titles">
        <div
          class="cb-step"
          data-step="cb-item3"
          id="cb-step3"
          :class="{
            'cb-step--current': $store.state.router == '/titles',
          }"
        >
          <p>
            <span>3</span>
            Заголовок
          </p>
        </div></router-link
      >

      <router-link to="/colors"
        ><div
          class="cb-step"
          data-step="cb-item4"
          id="cb-step4"
          :class="{
            'cb-step--current': $store.state.router == '/colors',
          }"
        >
          <p>
            <span>4</span>
            Цвет отпечатков
          </p>
        </div></router-link
      >
    </div>
    <div class="cb-top-line" v-else>
      <div
        class="cb-step"
        data-step="cb-item1"
        id="cb-step1"
        :class="{
          'cb-step--current': $store.state.router === '/',
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
          'cb-step--current': $store.state.router == '/borders',
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
          'cb-step--current': $store.state.router == '/titles',
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
          'cb-step--current': $store.state.router == '/colors',
        }"
      >
        <p>
          <span>4</span>
          Цвет отпечатков
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentClass: { class: 'cb-step--current' },
      route: this.$router.history.current.path,
    }
  },
}
</script>

<style lang="scss" scoped></style>
