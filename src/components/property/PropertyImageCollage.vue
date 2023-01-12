<template>
    <div class="property-image-collage">
        <div class="property-image-collage__container">
            <img 
                class="property-image-collage__first-item"
                :src="images[0].Url" 
                alt="Property image"
            >
            <div class="property-image-collage__items">
                <img 
                    class="property-image-collage__item"
                    :src="images[1].Url" 
                    alt="Property image"
                >
                <img 
                    class="property-image-collage__item"
                    :src="images[2].Url" 
                    alt="Property image"
                >
                <img 
                    class="property-image-collage__item"
                    :src="images[3].Url" 
                    alt="Property image"
                >
                <img 
                    class="property-image-collage__item"
                    :src="images[4].Url" 
                    alt="Property image"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PropertyImageCollage',
    props: {
        images: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss" scoped>
.property-image-collage {
    display: none;
    position: relative;
    overflow: hidden;
    width: 100vw;

    &__container {
    display: flex;
    align-items: center;
    height: 100%;
   }

   &__first-item {
       width: 50%;
   }

   &__items {
       display: flex;
       flex-wrap: wrap;
       width: 50%;
   }

   &__item {
       width: 50%;
   }

   &__total {
       position: absolute;
       bottom: 15px;
       right: 15px;
       z-index: 10;
       padding: 5px;
       border-radius: 5px;
       background: rgba(0, 0, 0, 0.6);
       color: white;
       font-size: 14px;
   }

    @media (min-width: #{$m}) {
        display: block;
    }
}
</style>