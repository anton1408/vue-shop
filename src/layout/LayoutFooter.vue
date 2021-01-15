<template>
  <div class="footer">
    <p class="footer__copyright">Copyright © 2021. Privacy Policy.</p>
  </div>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style lang="scss" scoped>
  .footer {
    height: 73px;
    background: rgba(192, 196, 206, 0.127321);

    &__copyright {
      color: #C0C4CE;
      font-size: 14.4px;
      font-weight: 400;
      font-family: 'Lucida Grande', 'Helvetica', sans-serif;
      text-align: center;
      padding: 22.2px 0 0 0;
    }
  }
</style>
