<template>
  <div>
    <app-layout-header-auth />
    <router-view />
    <app-layout-footer />
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

<style scoped>

</style>
