<template>
  <div class="property-images">
    <div v-if="images.length">
        <PropertyImageCarousel
            :images="images"
        />
        <PropertyImageCollage
            :images="images"
        />
        <div class="property-images__total"> 
            <PhotoIcon class="icon"/>
            Bekijk alle {{ images.length }} foto's 
        </div>
    </div>

    <div v-else >
        <img 
            class="property-image-collage__item"
            :src="mainImage" 
            alt="Main property image"
        >
    </div>
  </div>
</template>

<script>
import { PhotoIcon } from '@heroicons/vue/24/outline';
import PropertyImageCarousel from './PropertyImageCarousel.vue';
import PropertyImageCollage from './PropertyImageCollage.vue';

export default {
    name: "PropertyImages",
    components: {
        PhotoIcon,
        PropertyImageCarousel,
        PropertyImageCollage
    },
    props: {
        mainImage: {
            type: String,
            required: true
        },
        images: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.property-images {
    position: relative;

    &__total {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 10px;
        right: 10px;
        z-index: 10;
        padding: 5px 7px;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        font-size: 14px;
        cursor: pointer;

        .icon {
            width: 17px;
            margin-right: 7px;
        }
    }
}
</style>
