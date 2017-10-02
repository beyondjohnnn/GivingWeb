import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CharityTile from './index'

describe('CharityTile', () => {

	it('should render correctly', () => {
		const wrapper = shallow(<CharityTile />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

})