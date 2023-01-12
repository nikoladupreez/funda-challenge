
export async function fetchPropertyDetailsData(id) {
    return fetch(`/api/feeds/Aanbod.svc/json/detail/${process.env.VUE_APP_API_KEY}/koop/${id}`);
}
