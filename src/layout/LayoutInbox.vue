<template>
  <div>
    <app-layout-header-inbox class="layout-header" />
    <router-view />
  </div>
</template>

<script>
import LayoutHeaderInbox from '@/layout/LayoutHeaderInbox'

export default {
  name: 'LayoutInbox',
  components: {
    'app-layout-header-inbox': LayoutHeaderInbox
  }
}
</script>

<style lang="scss" scoped>
  .layout-header {
    margin-bottom: 34px;
  }
</style>
