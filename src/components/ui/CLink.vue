<template>
  <router-link
    :to="src"
    :style="styleObject"
    class="c-link"
  >
    <span class="header__login-btn">{{title}}</span>
  </router-link>
</template>

<script>
export default {
  name: 'CLink',
  props: {
    title: {
      type: String,
      default: () => 'Link'
    },
    backgroundColor: {
      type: String,
      default: () => 'transparent'
    },
    fontSize: {
      type: String,
      default: () => 12 + 'px'
    },
    fontColor: {
      type: String,
      default: () => '#000'
    },
    src: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    styleObject () {
      return {
        'background-color': this.backgroundColor,
        'font-size': this.fontSize,
        color: this.fontColor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-link {
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;

    &:visited {
      color: inherit;
    }
    &:hover {
      color: #349A89 !important;
    }

  }
</style>
