<template>
  <div class="property-description">
    <ShowMoreContent title="Omschrijving" height="200px">
        <p>{{ description }}</p>
    </ShowMoreContent>
  </div>
</template>

<script>
import ShowMoreContent from '../ShowMoreContent';

export default {
    name: 'PropertyDescription',
    components: {
        ShowMoreContent
    },
    props: {
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.property-description {
    padding: 24px 0;
    border-bottom: 1px solid lightgrey;

    p {
        white-space: pre-line;
    }
}
</style>
