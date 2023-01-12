<template>
  <div class="property-basic-info">
    <h1 class="property-basic-info__adress"> {{details.adres}} </h1>
    <p> {{details.postcode}} {{details.place}} </p>
    <div class="property-basic-info__numbers">
        <div> 
          <img 
            class="icon"
            src="../../assets/images/area.png" 
            alt="Living surface are"
          >
          {{details.livingSurface}} m<sup>2</sup>
        </div>
        <div> 
          <img 
            class="icon"
            src="../../assets/images/plot.png" 
            alt="Plot surface area"
          >
          {{details.plotSurface}} m<sup>2</sup>
        </div>
        <div> 
          <img 
            class="icon"
            src="../../assets/images/double-bed.png" 
            alt="Number of rooms"
          >
          {{details.numberRooms}} 
        </div>
    </div>
    <strong class="property-basic-info__price"> € {{details.price.toLocaleString('nl')}} {{details.buyingAbbreviation}} </strong>
  </div>
</template>

<script>
export default {
    name: "PropertyBasicInfo",
    props: {
        details: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.property-basic-info {
  padding-bottom: 24px;
  border-bottom: 1px solid lightgrey;

  &__numbers {
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;

    div {
      display: flex;
      align-items: center;
      margin-right: 20px;
      font-size: 14px;

      .icon {
        margin-right: 7px;
        width: 17px;
      }
    }
  }

  &__price {
    font-size: 20px;
  }
}
</style>
