import React from 'react'
import { shallow } from 'enzyme'

import Card from './Card'

describe('<Card />', () => {

    it('should trigger its `onClick` prop when clicked', () => {
        const onClick = jest.fn()
        const wrapper = shallow(
          <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
        )
    
        wrapper.simulate('click')
        expect(onClick).toHaveBeenCalledWith(0)
    })
    
})