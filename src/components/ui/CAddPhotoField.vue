<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="label"
    >
      {{label}}
    </label>
    <div class="photo-field">
      <input
        v-model="fieldValue"
        :type="fieldType"
        :id="id"
        class="photo-field__input"
        @input="emitValue"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CAddPhotoField',
  props: {
    value: {
      type: [String, Number],
      default: () => ''
    },
    label: {
      type: String,
      default: () => ''
    },
    id: {
      type: String,
      default: () => ''
    }
  },
  data: () => ({
    fieldValue: '',
    fieldType: ''
  }),
  mounted () {
    this.fieldType = this.type
    this.fieldValue = this.value
  },
  methods: {
    emitValue () {
      console.log('input = ', this.fieldValue)
      this.$emit('input', this.fieldValue)
    }
  }
}
</script>

<style lang="scss" scoped>
  .label {
    display: inline-block;
    margin-bottom: 4px;
    color: #303030;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  .photo-field {
    width: 100%;
    background-color: #F9FAFB;
    border: 1px solid #DEDEE0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 16px;

    &__input {
      background-color: #E4E4E4;
      border: none;
      border-radius: 4px;
      outline: none;
      width: 92px;
      height: 92px;
    }
  }
</style>
