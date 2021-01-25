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
    <div class="filter">filter</div>
    <div class="goods">goods</div>
  </main>
</template>

<script>
import CSearchField from '@/components/ui/CSearchField'
import CBtn from '@/components/ui/CBtn'

export default {
  name: 'home',
  components: {
    'c-search-field': CSearchField,
    'c-btn': CBtn
  }
}
</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    width: 855px;
    margin: -64px auto 0 auto;

    &__search-field {
      width: 467px;
      margin-right: 7px;
    }
    &__search-field--location { width: 198px; }
    &__search-btn {
      width: 176px;
    }
  }
</style>
