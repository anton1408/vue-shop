<template>
  <div>
    <app-layout-header />
    <router-view />
    <app-layout-footer class="layout-footer" />
  </div>
</template>

<script>
import LayoutHeader from '@/layout/LayoutHeader'
import LayoutFooter from '@/layout/LayoutFooter'

export default {
  name: 'LayoutMain',
  components: {
    'app-layout-header': LayoutHeader,
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
