<template>
  <div class="header">
    <div class="header__logo">
      <main-logo main-color="#fff" />
    </div>
    <div class="header__user-nav">
      <c-btn
        title="ts"
        letter-spacing="1px"
        font-color="rgba(19, 15, 2, 0.72)"
        background-color="#F1C40F"
        border-radius="100%"
        line-height="40px"
        class="header__ts"
      />
      <router-link
        to="/favorite"
        class="header__favorite"
      >
        <heart main-color="#fff" />
      </router-link>
    </div>
  </div>
</template>

<script>
import MainLogo from '@/components/svg/MainLogo'
import Heart from '@/components/svg/Heart'
import CBtn from '@/components/ui/CBtn'

export default {
  name: 'LayoutHeaderInbox',
  components: {
    'c-btn': CBtn,
    'main-logo': MainLogo,
    heart: Heart
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 77px;
    background: linear-gradient(180deg, #090810 0%, #171236 100%);

    &__logo {
      margin: 0 0 0 97px;
    }
    &__user-nav {
      align-items: center;
      display: flex;
      margin-right: 160px;
    }
    &__ts {
      width: 40px;
      margin-right: 38px;
    }
    &__favorite {
      cursor: pointer;
    }
  }
</style>
