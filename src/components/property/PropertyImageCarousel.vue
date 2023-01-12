<template>
    <div class="property-image-carousel">
        <div class="property-image-carousel__container">
            <img 
                v-for="(image, key) in images"
                :key="key"
                class="property-image-carousel__item"
                :src="image.Url" 
                alt="Property image"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropertyImageCarousel',
    props: {
        images: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.property-image-carousel {
    position: relative;
    overflow: hidden;
    width: 100vw;

   &__container {
    display: flex;
    align-items: center;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    height: 100%;
   }

   &__item {
    width: 100vw;
    scroll-snap-align: start;
   }

    @media (min-width: #{$m}) {
        display: none;
    }
}
</style>
