<template>
  <div>
    <app-layout-header-main />
    <router-view />
    <app-layout-footer class="layout-footer" />
  </div>
</template>

<script>
import LayoutHeaderMain from '@/layout/LayoutHeaderMain'
import LayoutFooter from '@/layout/LayoutFooter'

export default {
  name: 'LayoutMain',
  components: {
    'app-layout-header-main': LayoutHeaderMain,
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
