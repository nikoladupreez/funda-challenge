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
            const propertyDetialsData = await fetchPropertyDetailsData(id);
            Object.assign(this.model, mapPropertyDetails(propertyDetialsData));
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }
}