export default {
    namespaced: true, state: () => ({
        _calculatorData: {
            income: 0,
            sickLeaveDays: 0,
        },
        _tuberculosis: false
    }), actions: {
        setCalculatorData({commit}, value) {
            commit('SET_CALCULATOR_DATA', value)
        },
        setTuberculosis({commit}, value) {
            commit('SET_TUBERCULOSIS', value)
        }
    }, mutations: {
        SET_CALCULATOR_DATA(state, value) {
            state._calculatorData = value
        },
        SET_TUBERCULOSIS(state, value) {
            state._tuberculosis = value
        }
    }, getters: {
        calculatorData(state) {
            return state._calculatorData
        },
        tuberculosis(state) {
            return state._tuberculosis
        }
    },
}
