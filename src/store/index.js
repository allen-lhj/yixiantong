import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutation from './mutation';

Vue.use(VueX);

const store = new Vuex.Store({
    state,
    mutation
})

export default store;