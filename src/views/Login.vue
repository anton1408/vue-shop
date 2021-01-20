<template>
  <div class="login-wrapper">
    <c-card class="login">
      <form>
        <h1 class="visually-hidden">Login page</h1>
        <h3 class="login__title">Login</h3>
        <c-text-field
          label="email"
          type="email"
          id="email"
          placeholder="Example@gmail.com"
          class="login__text-field"
        />
        <c-text-field
          label="Password"
          type="password"
          id="password"
          class="login__text-field login__text-field--last-child"
        />
        <p class="login__forgot-password">
          <a href="javascript:void(0);">
            Don’t remember password?
          </a>
        </p>
        <c-btn
          title="continue"
          line-height="58px"
          font-size="16px"
          class="login__submit-btn"
        />
      </form>
    </c-card>
    <c-card class="registration">
      <p>
        I have no account,
        <a
          href="/registration"
          class="registration__link"
        >
          register now
        </a>
      </p>
    </c-card>
  </div>
</template>

<script>
import CCard from '@/components/ui/CCard'
import CTextField from '@/components/ui/CTextField'
import CBtn from '@/components/ui/CBtn'

export default {
  name: 'login',
  components: {
    'c-card': CCard,
    'c-text-field': CTextField,
    'c-btn': CBtn
  },
  data: () => ({
    email: '',
    password: ''
  })
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  padding-top: 61px;
}
.login {
  width: 425px;
  padding: 24px;
  margin: 0 auto 24px;

  &__title {
    margin: 0 0 32px 0;
    color: #282828;
    font-size: 22px;
    font-weight: 400;
    line-height: 25px;
    text-align: center;
  }
  &__text-field {
    margin-bottom: 14px;

    &--last-child {margin-bottom: 5px;}
  }
  &__forgot-password {
    margin: 0 0 16px 0;
    text-align: right;

    a {
      color: #8C8C8C;
      text-decoration: none;
      cursor: pointer;

      &:visited {color: #8C8C8C;}
    }
  }
  &__submit-btn {}
}
.registration {
  width: 425px;
  padding: 24px;
  margin: 0 auto;
  text-align: center;

  &__link {
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;

    &:visited {color: #349A89;}
  }
}
</style>
