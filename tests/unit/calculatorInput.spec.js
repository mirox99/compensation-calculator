import {mount} from '@vue/test-utils'
import Foo from '@/components/calculatorInput'

describe('calculatorInput.vue', () => {
    const wrapper = mount(Foo, {
        propsData: {
            label: 'input label',
            type: 'input type',
            id: 'input'
        }
    })

    it('renders props.label when passed', async () => {
        expect(wrapper.text()).toMatch('input label')
    })
    it('renders props.type when passed', async () => {
        expect(wrapper.text()).toMatch('input type')
    })
})

