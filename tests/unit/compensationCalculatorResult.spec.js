import {mount, createLocalVue} from '@vue/test-utils'
import compensationCalculatorResult from '@/components/compensationCalculatorResult'
import Vuex from 'vuex'
import compensationCalculator from '@/store/modules/compensationCalculator'

const localVue = createLocalVue()

localVue.use(Vuex)
describe('compensationCalculatorResult.vue', () => {
    let state
    let store

    state = {
        _calculatorData: {
            income: 1500,
            sickLeaveDays: 7,
        },
        _tuberculosis: false
    }

    store = new Vuex.Store({
        modules: {
            compensationCalculator: {
                state, getters: compensationCalculator.getters, namespaced: true
            }
        }
    })

    const wrapper = mount(compensationCalculatorResult, {store, localVue})

    it('check silLeavesDays', async () => {
        expect(wrapper.vm.sickLeaveDays).toBe(7)
    })
    it('check compensationDailyAllowance', async () => {
        expect(wrapper.vm.compensationDailyAllowance).toBe(48)
    })
    it('check employerCompensationDays', async () => {
        expect(wrapper.vm.employerCompensationDays).toBe(4)
    })
    it('check employerCompensationMoney', async () => {
        expect(wrapper.vm.employerCompensationMoney).toBe(192)
    })
    it('check insuranceCompensationDays', async () => {
        expect(wrapper.vm.insuranceCompensationDays).toBe(0)
    })
    it('check totalCompensationMoney', async () => {
        expect(wrapper.vm.totalCompensationMoney).toBe(192)
    })

})

