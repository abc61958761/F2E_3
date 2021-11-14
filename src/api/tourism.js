import appserver from "./appserve";
const API_URL = "/v2/Tourism";

const tourism = {
  async getScenicSpots(params) {
    return await appserver.get(`${API_URL}/ScenicSpot/${params}`);
  },
  async getRestaurants(params) {
    return await appserver.get(`${API_URL}/Restaurant/${params}`);
  },
  async getHotels(params) {
    return await appserver.get(`${API_URL}/Hotel/${params}`);
  }
};

export default tourism;
