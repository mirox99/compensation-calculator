const setCalculatorData = ({commit}, value) => {
    commit('SET_CALCULATOR_DATA', value)
}
const setTuberculosis = ({commit}, value) => {
    commit('SET_TUBERCULOSIS', value)
}

export default {
    setCalculatorData,
    setTuberculosis,
}