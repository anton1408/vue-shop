<template>
  <div
    :style="styleObject"
    :class="className"
    class="c-btn"
    @click="click"
  >
    <span>
      {{title}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'CBtn',
  props: {
    title: {
      type: String,
      default: () => 'Button'
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    lineHeight: {
      type: String,
      default: () => 31 + 'px'
    },
    backgroundColor: {
      type: String,
      default: () => '#349A89'
    },
    fontSize: {
      type: String,
      default: () => 14 + 'px'
    },
    letterSpacing: {
      type: String,
      default: () => '0px'
    },
    fontColor: {
      type: String,
      default: () => '#fff'
    },
    borderRadius: {
      type: String,
      default: () => '4px'
    }
  },
  computed: {
    className () {
      return {
        'c-btn__disabled': this.disabled
      }
    },
    styleObject () {
      return {
        'line-height': this.lineHeight,
        'background-color': this.backgroundColor,
        'font-size': this.fontSize,
        'letter-spacing': this.letterSpacing,
        color: this.fontColor,
        'border-radius': this.borderRadius
      }
    }
  },
  methods: {
    click () {
      console.log('click')
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-btn {
    //border-radius: 4px;
    cursor: pointer;
    width: 100%;
    user-select: none;
    text-align: center;
    text-transform: uppercase;

    &:hover {
      opacity: 0.9;
    }
    &__disabled {
      pointer-events: none;
    }
  }
</style>
