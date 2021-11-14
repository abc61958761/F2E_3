import tourismAPIs from "../../api/tourism";

const tourism = {
  state: {
    scenicSpots: [],
    restaurants: [],
    hotels: [],
    tmpScenicSpots: [],
  },
  mutations: {
    UPDATE_SCENIC_SPOTS(state, payload) {
      state.scenicSpots = payload;
    },
    UPDATE_RESTAURANTS(state, payload) {
      state.restaurants = payload;
    },
    UPDATE_HOTELS(state, payload) {
      state.hotels = payload;
    },
    UPDATE_TMP_SCENIC_SPOTS(state, payload) {
      state.tmpScenicSpots = payload;
    },
  },
  actions: {
    async getScenicSpots({ commit, getters, disaptch }, params) {
      if (params.isChangeCity) {
        await disaptch.getScenicSpotAPI(params.city);
      }
      const data = getters.getTmpScenicSpots.slice(params.start, 20);
      commit("UPDATE_SCENIC_SPOTS", data);
    },
    async getScenicSpotAPI({ commit }, params) {
      try {
        const response = await tourismAPIs.getScenicSpots(params);

        commit("UPDATE_TMP_SCENIC_SPOTS", response);
      } catch (err) {
        console.log(err);
      }
    },
    async getRestaurants({ commit }, params) {
      try {
        const response = await tourismAPIs.getRestaurants(params);

        commit("UPDATE_RESTAURANTS", response);
      } catch (err) {
        console.log(err);
      }
    },
    async getHotels({ commit }, params) {
      try {
        const response = await tourismAPIs.getHotels(params);

        commit("UPDATE_HOTELS", response);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    getScenicSpots(state) {
      return state.scenicSpots;
    },
    getRestaurants(state) {
      return state.restaurants;
    },
    getHotels(state) {
      return state.hotels;
    },
    getTmpScenicSpots(state) {
      return state.tmpScenicSpots;
    },
  },
};

export default tourism;
