<template>
  <div
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
    error: {
      type: Boolean,
      default: () => false
    },
    success: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    className () {
      return {
        'c-btn__disabled': this.disabled,
        'c-btn__error': this.error,
        'c-btn__success': this.success
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
    background: #349A89;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    line-height: 31px;
    padding: 0 8px;
    width: 100%;
    user-select: none;
    text-align: center;

    &:hover {
      background-color: rgba(52, 154, 137, 0.9);
    }
    &__disabled {
      pointer-events: none;
    }
    &__error {
      background-color: red;
    }
    &__success {
      background-color: blue;
    }
  }
</style>
