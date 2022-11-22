import Vuex from 'vuex'
import Vue from 'vue'
import compensationCalculator from './modules/compensationCalculator'
import compensationCalculatorContent from './modules/compensationCalculatorContent'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        compensationCalculator,
        compensationCalculatorContent
    },
})
