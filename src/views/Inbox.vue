<template>
  <div class="inbox-wrapper">
    <c-card class="inbox">
      <form class="inbox__form">
        <h3 class="inbox__title">Add product</h3>
          <c-text-field
            label="title"
            type="text"
            id="title"
            placeholder="For example: Iron man suit"
            class="inbox__text-field"
          />
          <c-text-field
            label="location"
            type="text"
            id="location"
            placeholder="For example: Los Angeles, CA"
            class="inbox__text-field"
          />
          <c-text-area
            label="description"
            id="description"
            placeholder="For example: Iron man suit"
          />
          <p>Photos</p>
          <c-text-field
            label="price"
            type="text"
            id="price"
            placeholder="For example: Los Angeles, CA"
            class="inbox__text-field"
          />
          <c-btn
            title="submit"
            line-height="58px"
            font-size="16px"
            class="inbox__submit-btn"
          />

      </form>
    </c-card>
  </div>
</template>

<script>
import CCard from '@/components/ui/CCard'
import CTextField from '@/components/ui/CTextField'
import CTextArea from '@/components/ui/CTextArea'
import CBtn from '@/components/ui/CBtn'

export default {
  name: 'Inbox',
  components: {
    'c-card': CCard,
    'c-text-field': CTextField,
    'c-text-area': CTextArea,
    'c-btn': CBtn

  }
}
</script>

<style lang="scss" scoped>
  .inbox-wrapper {
    padding-top: 34px;
  }
  .inbox {
    width: 1136px;
    padding: 36px 0 32px 0;
    margin: 0 auto;

    &__form {
      width: 664px;
      margin: 0 auto;
    }
    &__title {
      margin: 0 0 32px 0;
      color: #282828;
      font-size: 22px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
    }
    &__text-field {margin-bottom: 24px;}
    &__submit-btn {
      width: 377px;
      margin: 0 auto;
    }
  }
</style>
