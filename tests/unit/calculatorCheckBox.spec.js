import {mount} from '@vue/test-utils'
import Foo from '@/components/calculatorCheckBox'


describe('calculatorButton.vue', () => {
    const wrapper = mount(Foo, {
        propsData: {
            id: 'inputId', label: 'this is label', value: false
        }
    })

    it('set id props', async () => {
        expect(wrapper.props().id).toBe('inputId')
    })
    it('set value props', async () => {
        expect(wrapper.props().value).toBe(false)
    })
    it('renders props.title when passed', async () => {
        expect(wrapper.text()).toMatch('this is label')
    })
    it('input event check', async () => {
        const checkbox = wrapper.find('.input')
        await checkbox.setChecked()

        expect(checkbox.element.checked).toBeTruthy()
        expect(wrapper.emitted().input).toBeTruthy()
        expect(wrapper.emitted().input[0][0]).toEqual(true)
        await wrapper.vm.$nextTick()

        expect(wrapper.vm.model).toBe(true)
    })
})

