<template>
  <main>
    <div class="search">
      <c-search-field
        :append-icon="['fas', 'search']"
        placeholder="Search products by name"
        class="search__search-field"
      />
      <c-search-field
        :append-icon="['fas', 'map-marker-alt']"
        placeholder="Location"
        class="search__search-field search__search-field--location"
      />
      <c-btn
        title="search"
        lineHeight="50px"
        backgroundColor="#3E3961"
        class="search__search-btn"
      />
    </div>
    <c-card
      border-radius="4px"
      box-shadow="0px 1px 4px rgba(0, 0, 0, 0.217111)"
      class="filter"
    >
      <c-select
        :options="options"
      />
    </c-card>
    <div class="goods">goods</div>
  </main>
</template>

<script>
import CSearchField from '@/components/ui/CSearchField'
import CBtn from '@/components/ui/CBtn'
import CCard from '@/components/ui/CCard'
import CSelect from '@/components/ui/CSelect'

export default {
  name: 'home',
  components: {
    'c-search-field': CSearchField,
    'c-btn': CBtn,
    'c-card': CCard,
    'c-select': CSelect
  },
  data: () => ({
    options: [
      { name: 'Option 1', value: 1 },
      { name: 'Option 1', value: 2 },
      { name: 'Option 1', value: 3 },
      { name: 'Option 1', value: 4 },
      { name: 'Option 1', value: 5 }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    width: 855px;
    margin: -64px auto 33px auto;

    &__search-field {
      width: 467px;
      margin-right: 7px;
    }
    &__search-field--location { width: 198px; }
    &__search-btn {
      width: 176px;
    }
  }
  .filter {
    display: flex;
    width: 855px;
    margin: 0 auto;
    padding: 12px;
  }
</style>
