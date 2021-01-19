<template>
  <div class="registration-wrapper">
    <c-card class="registration">
      <h1 class="visually-hidden">Registration page</h1>
      <h3 class="registration__title">Register</h3>
      <c-text-field
        label="email"
        type="email"
        name="email"
        placeholder="Example@gmail.com"
        class="registration__text-field"
      />
      <c-text-field
        label="full name"
        type="text"
        name="full-name"
        placeholder="Peter Parker"
        class="registration__text-field"
      />
      <c-text-field
        label="Password"
        type="password"
        name="password"
        class="registration__text-field"
      />
      <c-text-field
        label="Password again"
        type="password"
        name="confirm-password"
        class="registration__text-field"
      />
    </c-card>
    <c-card class="login">
      <p>
        I already have an account,
        <a
          href="/login"
          class="login__link"
        >
          log in
        </a>
      </p>
    </c-card>
  </div>
</template>

<script>
import CCard from '@/components/ui/CCard'
import CTextField from '@/components/ui/CTextField'

export default {
  name: 'registration',
  components: {
    'c-card': CCard,
    'c-text-field': CTextField

  },
  data: () => ({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: ''
  })
}
</script>

<style lang="scss" scoped>
  .registration-wrapper {
    padding-top: 61px;
  }
  .registration {
    width: 425px;
    padding: 24px;
    margin: 0 auto 24px;

    &__title {
      padding: 0;
      margin: 0 0 32px 0;
      color: #282828;
      font-size: 22px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
    }
    &__text-field {
      margin-bottom: 14px;
    }
  }
  .login {
    width: 425px;
    padding: 24px;
    margin: 0 auto;
    text-align: center;

    &__link {
      cursor: pointer;
      text-transform: uppercase;
      text-decoration: none;

      &:visited {color: #349A89;}
      &:hover {text-decoration: underline;}
    }
  }
</style>
