<template>
  <div class="property-details">
    <PropertyImages
      :main-image="details.mainImage"
      :images="details.images"
      @click="showImagesDialog = true"
    />
    <PropertyImagesDialog 
      v-model="showImagesDialog"
      :images="details.images"
    />

    <div 
      v-if="!showImagesDialog"
      class="property-details__container"
    >
      <div class="property-details__content">
        <PropertyBasicInfo :details="details" />
        <PropertyDescription :description="details.description" />
        <PropertyCharacteristics :characteristics="details.characteristics" />
      </div>

      <div class="property-details__contact">
        <p class="property-details__contact__name"> 
          {{ details.realtor }} 
        </p>
        <a 
          class="property-details__contact__phone"
          :href="`tel:${details.phone}`"
        >
          <PhoneIcon class="icon"/>
          <p class="property-details__contact__phone__text"> Bellen </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { PhoneIcon } from '@heroicons/vue/24/outline'
import PropertyDetailsViewmodel from '../../viewmodels/property-details-viewmodel';
import PropertyImages from './PropertyImages.vue';
import PropertyImagesDialog from './PropertyImagesDialog.vue';
import PropertyBasicInfo from './PropertyBasicInfo'
import PropertyDescription from './PropertyDescription.vue';
import PropertyCharacteristics from './PropertyCharacterstics.vue';

export default {
  name: 'PropertyDetails',
  components: {
    PhoneIcon,
    PropertyImages,
    PropertyImagesDialog,
    PropertyBasicInfo,
    PropertyDescription,
    PropertyCharacteristics
  },
  setup() {
    const id = process.env.PROPERTY_ID;
    const details = new PropertyDetailsViewmodel(id).model;

    return { 
      details,
      showImagesDialog: ref(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.property-details {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__content {
    padding: 24px;

    @media (min-width: #{$m}) {
      padding: 30px;
    }

    @media (min-width: #{$l}) {
      padding: 36px;
      width: 70%;
    }

    @media (min-width: #{$xl}) {
      padding: 80px;
    }
  }

  &__contact {
    position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: white;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.2);

    &__name {
      width: 50%;
    }

    &__phone {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      background-color: #f7a100;
      color: white;
      text-decoration: none;

      &__text {
        display: none;
      }
    }

    .icon {
      height: 23px;
      stroke: white;
    }

    @media (min-width: #{$l}) {
      flex-direction: column;
      margin: 36px;
      padding: 20px;
      width: 30%;
      height: 150px;
      border-radius: 5px;

      &__name {
        width: 100%;
        text-align: center;
        font-weight: 500;
      }

      &__phone {
        border-radius: 5px;
        width: 80%;

        &__text {
          display: block;
          margin-left: 10px;
        }
      }

      .icon {
        height: 20px;
      }
    }

    @media (min-width: #{$xl}) {
      margin: 80px;
    }
  }

  &__container {
    @media (min-width: #{$l}) {
      display: flex;
    }

    @media (min-width: #{$xl}) {
      max-width: 1440px;
    }
  }
}
</style>
