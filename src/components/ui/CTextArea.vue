<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="label"
    >
      {{label}}
    </label>
    <div class="text-field">
      <textarea
        v-model="fieldValue"
        :type="fieldType"
        :placeholder="placeholder"
        :id="id"
        :cols="cols"
        :rows="rows"
        class="text-field__text-area"
        @input="emitValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTextArea',
  props: {
    value: {
      type: [String, Number],
      default: () => ''
    },
    label: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'text'
    },
    id: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    cols: {
      type: Number,
      default: () => 20
    },
    rows: {
      type: Number,
      default: () => 7
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

  .text-field {
    background-color: #F9FAFB;
    border: 1px solid #DEDEE0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 22px;

    &__text-area {
      width: 100%;
      background-color: transparent;
      border: none;
      outline: none;
      color: #000000;
      font-size: 16px;
      overflow: hidden;
      resize: none;
    }
    &__text-area[placeholder],
    &__text-area::-moz-placeholder,
    &__text-area:-moz-placeholder,
    &__text-area:-ms-input-placeholder {color: rgba(102, 102, 102, 0.466455);}
    &__text-area:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.5s ease;}
    &__text-area:focus::-moz-placeholder {opacity: 0; transition: opacity 0.5s ease;}
    &__text-area:focus:-moz-placeholder {opacity: 0; transition: opacity 0.5s ease;}
    &__text-area:focus:-ms-input-placeholder {opacity: 0; transition: opacity 0.5s ease;}
  }
</style>
