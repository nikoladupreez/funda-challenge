<template>
  <div class="page">
      <header>
        <img 
          class="logo"
          src="https://assets.fstatic.nl/master-25738/assets/components/logo/fundawonen-logo.svg" 
          alt="Logo"
        >
      </header>
      <PropertyDetails />
  </div>
</template>

<script>
import PropertyDetails from './components/property/PropertyDetails.vue';

export default {
  name: 'App',
  components: {
    PropertyDetails
  }
}
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    width: 100%;
    background-color: #f7a100;

    .logo {
      width: 100px;
    }
  }
}
</style>
