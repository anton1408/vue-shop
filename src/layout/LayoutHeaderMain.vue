<template>
  <div class="header-wrapper">
    <div class="header">
      <div class="header__logo">
        <main-logo main-color="#fff" />
      </div>
      <div class="header__user-nav">
        <c-btn
          title="+add"
          class="header__add-btn"
        />
        <c-link
          title="login"
          fontColor="#fff"
          src="/login"
          class="header__login-btn"
        />
        <router-link
          to="/favorite"
          class="header__favorite"
        >
          <heart main-color="#fff" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MainLogo from '@/components/svg/MainLogo'
import Heart from '@/components/svg/Heart'
import CBtn from '@/components/ui/CBtn'
import CLink from '@/components/ui/CLink'

export default {
  name: 'LayoutHeaderMain',
  components: {
    'c-btn': CBtn,
    'c-link': CLink,
    'main-logo': MainLogo,
    heart: Heart
  }
}
</script>

<style lang="scss" scoped>
  .header-wrapper {
    height: 166px;
    background: linear-gradient(180deg, #090810 0%, #171236 100%);
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 77px;

    &__logo {
      margin: 0 0 0 97px;
    }
    &__user-nav {
      align-items: center;
      display: flex;
      margin-right: 160px;
    }
    &__add-btn {
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
