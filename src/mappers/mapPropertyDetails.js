import { mapPropertyImages } from "./mapPropertyImages";

export function mapPropertyDetails(data) {
    return {
        mainImage: data.HoofdFoto,
        images: mapPropertyImages(data.Media),
        adres: data.Adres,
        postcode: data.Postcode,
        place: data.Plaats,
        livingSurface: data.WoonOppervlakte,
        plotSurface: data.PerceelOppervlakte,
        numberRooms: data.AantalKamers,
        price: data.Koopprijs,
        buyingAbbreviation: data.Prijs.KoopAbbreviation,
        description: data.VolledigeOmschrijving,
        characteristics: data.Kenmerken,
        realtor: data.Makelaar,
        phone: data.MakelaarTelefoon
    }
}
