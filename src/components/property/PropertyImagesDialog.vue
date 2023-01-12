<template>
  <div 
    v-if="modelValue" 
    class="property-images-dialog"
  >
    <div class="property-images-dialog__top">
      <button @click="closeDialog"> 
        Terug 
      </button>
      <button 
        v-if="selectedImage"
        @click="selectedImage = null"
      > 
        Bekijk alle {{images.length}} foto's 
      </button>
      <p v-else> 
        Foto's {{ images.length }} 
      </p>
    </div>

    <div 
      v-if="selectedImage"
      class="property-images-dialog__container"
    >
      <img 
        class="property-images-dialog__selected-item"
        :src="selectedImage.Url" 
        alt="Property image"
      >
    </div>

    <div 
      v-else
      class="property-images-dialog__list"
    >
      <img 
        v-for="(image, key) in images"
        :key="key"
        class="property-images-dialog__item"
        :src="image.Url" 
        alt="Property image"
        @click="selectedImage = image"
      >
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "PropertyImagesDialog",
  props: {
    modelValue: {
      type: Boolean,
      default: false
  },
    images: {
      type: Array,
      default: () => []
    }
  },
  emits: [ 'update:modelValue' ],
  setup(_, { emit }) {
    const selectedImage = ref(null);

    function closeDialog() {
      selectedImage.value = null;
      emit('update:modelValue', false);
    }

    return {
      selectedImage,
      closeDialog
    }
  }
}
</script>

<style lang="scss" scoped>
.property-images-dialog {
  position: absolute;
  z-index: 100;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 64px);
  background-color: white;

  &__top {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: calc(100% - 20px);

    button {
      text-decoration: underline;
    }

    @media (min-width: #{$m}) {
      padding: 10px 15px;
      width: calc(100% - 30px);
    }

    @media (min-width: #{$l}) {
      max-width: 1440px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 40px;

    @media (min-width: #{$l}) {
      max-width: 1440px;
    }
  }

  &__item {
    margin-bottom: 12px;
    width: 45%;
    cursor: pointer;

    @media (min-width: #{$m}) {
      width: 47%;
    }

    @media (min-width: #{$l}) {
      width: 31%;
    }

    @media (min-width: #{$xl}) {
      width: 24%;
    }
  }

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 64px);
  }

  &__selected-item {
    width: 100%;

    @media (min-width: #{$l}) {
      height: 80%;
      width: auto;
    }
  }
}
</style>
