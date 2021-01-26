<template>
  <div class="c-select">
    <p>Select</p>
    <div class="c-select__options">
      <p
        v-for="option in options"
        :key="option.value"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSelect',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
  .c-select {
    position: relative;
    cursor: pointer;

    &__options {

    }
  }
</style>
