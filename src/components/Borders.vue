<template>
  <div class="cb-item-borders">
    <div
      class="cb-item-border"
      v-for="border of borders"
      :key="border.id"
      @click="
        decideBorder($event, border)
        addSelect(border.id)
      "
      :class="{ select: border.id == chosenBorder }"
    >
      <img
        :src="border.src"
        :alt="border.name"
        :title="border.name"
        width="120"
        height="150"
      />
      <router-link
        class="cb-item-border__prev fancybox gallery"
        :to="{
          name: 'PopupPage',
          params: { id: ' 123' },
          query: { border, route: routeForSending },
        }"
        :title="border.name"
        rel="gal-14"
        v-if="border.popup != null"
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      borders: this.$store.state.bordersData.borders,
      chosenBorder: null,
      routeForSending: this.$route.path,
    }
  },
  methods: {
    decideBorder(event, element) {
      // compera if it <a></a> element return, if not go next

      if (this.$children[element.id].tag == event.path[0].localName) {
        return
      }
      this.$store.state.cart.splice(1, 1, element)
    },
    addSelect(element) {
      this.chosenBorder = element
    },
  },
  mounted() {
    this.$store.state.router = '/borders'
  },
}
</script>

<style lang="scss" scoped></style>
