<template>
  <div class="header">
    <div class="header__logo">
      <main-logo />
    </div>
    <div class="header__user-nav">
      <c-btn
        title="sell"
        class="header__sell-btn"
      />
      <c-link
        title="login"
        src="/login"
        class="header__login-btn"
      />
      <router-link
        to="/favorite"
        class="header__favorite"
      >
        <heart />
      </router-link>
    </div>
  </div>
</template>

<script>
import MainLogo from '@/components/svg/MainLogo'
import Heart from '@/components/svg/Heart'
import CBtn from '@/components/ui/CBtn'
import CLink from '@/components/ui/CLink'

export default {
  name: 'LayoutHeaderAuth',
  components: {
    'c-btn': CBtn,
    'c-link': CLink,
    'main-logo': MainLogo,
    heart: Heart
  }
}
</script>

<style lang="scss" scoped>
  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 77px;

    &__logo {
      margin: 0 0 0 97px;
    }
    &__user-nav {
      align-items: center;
      display: flex;
      margin-right: 160px;
    }
    &__sell-btn {
      width: 131px;
      margin-right: 32px;
    }
    &__login-btn {
      margin-right: 40px;
    }
    &__favorite {
      cursor: pointer;
    }
  }
</style>
