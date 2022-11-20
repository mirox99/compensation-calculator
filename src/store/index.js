import Vuex from 'vuex'
import Vue from 'vue'
import compensationCalculator from './modules/compensationCalculator'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        compensationCalculator
    },
})
