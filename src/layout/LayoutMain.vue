<template>
  <div>
    <app-layout-header />
    <router-view />
    <app-layout-footer />
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

<style scoped>

</style>
