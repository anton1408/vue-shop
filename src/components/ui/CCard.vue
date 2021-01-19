<template>
  <div class="c-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CCard'
}
</script>

<style lang="scss" scoped>
  .c-card {
    background-color: #fff;
    box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
    border-radius: 7px;
  }
</style>
