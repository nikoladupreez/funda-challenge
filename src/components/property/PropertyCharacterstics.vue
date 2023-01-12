<template>
  <div class="property-characteristics">
    <ShowMoreContent title="Kenmerken" height="250px">
      <PropertyCharacteristicsGroup
        v-for="(characteristic, key) in characteristics"
        :key="key"
        :title="characteristic.Titel"
        :items="characteristic.Kenmerken"
      />
    </ShowMoreContent>
  </div>
</template>

<script>
import ShowMoreContent from '../ShowMoreContent.vue';
import PropertyCharacteristicsGroup from './PropertyCharacteristicsGroup.vue';

export default {
  name: "PropertyCharacteristics",
  components: {
    ShowMoreContent,
    PropertyCharacteristicsGroup
  },
  props: {
    characteristics: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.property-characteristics {
  padding: 24px 0;
}
</style>
