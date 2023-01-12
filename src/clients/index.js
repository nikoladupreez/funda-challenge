
export async function fetchPropertyDetailsData(id) {
    return fetch(`/api/feeds/Aanbod.svc/json/detail/${process.env.API_KEY}/koop/${id}`);
}
