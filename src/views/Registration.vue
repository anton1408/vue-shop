<template>
  <div class="registration-wrapper">
    <c-card class="registration">
      <p class="registration__title">Register</p>
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
    display: flex;
    justify-content: center;
  }
  .registration {
    width: 425px;
    padding: 24px;

    &__title {
      padding: 0;
      margin: 0 0 32px 0;
      color: #282828;
      font-size: 22px;
      line-height: 25px;
      text-align: center;
    }
    &__text-field {
      margin-bottom: 14px;
    }
  }
</style>
