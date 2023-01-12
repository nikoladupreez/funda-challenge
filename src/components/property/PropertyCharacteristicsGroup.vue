<template>
  <div class="property-characteristics-group">
    <h3>{{ title }}</h3>
    <div 
      v-for="(item, key) in items"
      :key="key"
      class="property-characteristics-group__item"
    >
      <h4>{{item.Naam}}</h4>
      <div v-html="item.Waarde"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyCharacteristicsGroup',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.property-characteristics-group {
  margin-bottom: 20px;

  &__item {
    border-top: 1px solid rgb(235, 233, 233);
    padding: 10px 0;

    @media (min-width: #{$m}) {
      display: flex;

      h4 {
        width: 300px;
      }
    }
  }
}
</style>