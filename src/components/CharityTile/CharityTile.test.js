import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

import CharityTile from './index.jsx'

configure({ adapter: new Adapter() })

describe('first test', () => {
	it('works', () => {
		const component = shallow(<CharityTile />)
		console.log(component)
	})
})