import { fetchPropertyDetailsData } from '../clients';
import { mapPropertyDetails } from '../mappers/mapPropertyDetails.js';
import { reactive } from 'vue';

export default class PropertyDetailsViewmodel {
  model = reactive({});

  constructor(id) {
    this.getPropertyDetails(id);
  }

  async getPropertyDetails(id) {
    try {
      // Fetch the data from the Funda API
      const propertyDetialsData = await fetchPropertyDetailsData(id);

      // Map the response data before assigning it to the model
      Object.assign(this.model, mapPropertyDetails(propertyDetialsData));
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}
