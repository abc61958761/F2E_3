import Vue from "vue";
import Vuex from "vuex";

import tourism from "./modules/tourism";


Vue.use(Vuex);

/**
 * CreateStore - Function to create store.
 *
 * @returns {Object}  Description.
 */
const store = new Vuex.Store({
  modules: {
    tourism
  },
});

export default store;
