import {mount} from '@vue/test-utils'
import Foo from '@/components/calculatorButton'
import sinon from 'sinon'

describe('calculatorButton.vue', () => {
    it('renders props.title when passed', async () => {
        const wrapper = mount(Foo, {
            propsData: {
                title: 'create'
            }
        })

        expect(wrapper.text()).toMatch('create')
    })
    it('renders props.clickEvent when passed', async () => {
        const clickHandler = sinon.stub()

        const wrapper = mount(Foo, {
            propsData: {
                clickEvent: clickHandler
            }
        })

        await wrapper.trigger('click')

        expect(clickHandler.called).toBe(true)
    })
})

