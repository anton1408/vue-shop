<template>
  <div class="search-field">
    <font-awesome-icon
      :icon="appendIcon"
      :size="sizeIcon"
      :color="iconColor"
    />
    <input
      v-model="fieldValue"
      :type="fieldType"
      :placeholder="placeholder"
      :id="id"
      class="search-field__input"
      @input="emitValue"
    >
    <font-awesome-icon
      :icon="prependIcon"
      :size="sizeIcon"
      :color="iconColor"
    />
  </div>
</template>

<script>
export default {
  name: 'CTextField',
  props: {
    disabled: {
      type: Boolean,
      default: () => false
    },
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
    appendIcon: {
      type: Array,
      default: () => []
    },
    prependIcon: {
      type: Array,
      default: () => []
    },
    sizeIcon: {
      type: String,
      default: () => 'lg'
    },
    iconColor: {
      type: String,
      default: () => '#5C5C5C'
    },
    height: {
      type: String,
      default: () => '50px'
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
  .search-field {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 15px;

    &__input {
      width: 100%;
      padding-left: 15px;
      background-color: transparent;
      border: none;
      outline: none;
      color: #000;
      font-size: 15px;
    }
    &__input[placeholder],
    &__input::-moz-placeholder,
    &__input:-moz-placeholder,
    &__input:-ms-input-placeholder {color: rgba(102, 102, 102, 0.466455);}
    &__input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.5s ease;}
    &__input:focus::-moz-placeholder {opacity: 0; transition: opacity 0.5s ease;}
    &__input:focus:-moz-placeholder {opacity: 0; transition: opacity 0.5s ease;}
    &__input:focus:-ms-input-placeholder {opacity: 0; transition: opacity 0.5s ease;}
  }
</style>
