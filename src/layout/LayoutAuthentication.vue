<template>
  <div class="layout-wrapper">
    <app-layout-header-auth />
    <router-view />
    <app-layout-footer class="layout-footer" />
  </div>
</template>

<script>
import LayoutHeaderAuth from '@/layout/LayoutHeaderAuth'
import LayoutFooter from '@/layout/LayoutFooter'

export default {
  name: 'LayoutAuthentication',
  components: {
    'app-layout-header-auth': LayoutHeaderAuth,
    'app-layout-footer': LayoutFooter
  }
}
</script>

<style lang="scss" scoped>
  .layout-footer {
    width: 100%;
    position: absolute;
    left: 0; bottom: 0px;
  }
</style>
