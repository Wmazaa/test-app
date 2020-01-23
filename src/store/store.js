import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
    state:
    {
        figure1: '',
        figure2: '',
        figure3: '',
        selected: {
            input1: false,
            input2: false,
            input3: false,
        },
    },
    getters: {
        figure1: state => state.figure1,
        figure2: state => state.figure2,
        figure3: state => state.figure3,
        selected: state => state.selected,
    },
    mutations: {
        figure1(state, figure1) {
            state.figure1 = figure1;
        },
        figure2(state, figure2) {
            state.figure2 = figure2;
        },
        figure3(state, figure3) {
            state.figure3 = figure3;
        },
        select(state, input) {
            state.selected[input] = true;
        },
        removeSelect(state, input) {
            state.selected[input] = false;
        },
    },
});