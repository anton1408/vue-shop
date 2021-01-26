<template>
  <div
    :style="styleObject"
    class="c-card"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CCard',
  props: {
    backgroundColor: {
      type: String,
      default: () => '#fff'
    },
    borderRadius: {
      type: String,
      default: () => '7px'
    },
    boxShadow: {
      type: String,
      default: () => '0px 2px 42px rgba(0, 0, 0, 0.111233)'
    }
  },
  computed: {
    styleObject () {
      return {
        'background-color': this.backgroundColor,
        'border-radius': this.borderRadius,
        'box-shadow': this.boxShadow
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-card {}
</style>
