<template>
  <div class="show-more-content">
    <h2 v-if="title"> {{title}} </h2>
    <div 
      :class="[
        'show-more-content__content', 
        {'show-more-content__content--full': showAllContent}
      ]"
    >
      <slot />
    </div>
    <button
      class="show-more-content__button"
      @click="showAllContent  = !showAllContent"
    > 
      {{showAllContent ? 'Minder' : `Meer`}} tonen 
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ShowMoreContent',
  props: {
    height: {
      type: String,
      default: '200px'
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    return {
      showAllContent: ref(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.show-more-content {
  &__content {
    position: relative;
    overflow: hidden;
    margin-bottom: 5px;
    height: v-bind(height);

    &::after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5rem;
      background: linear-gradient(hsla(0,0%,100%,0),#fff);
      content: "";
    }

    &--full {
      margin-bottom: 10px;
      height: 100%;
      
      &::after {
        display: none;
      }
    }
  }

  &__button {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }
}
</style>
