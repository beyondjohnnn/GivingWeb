import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

import CharityDashboard from './index'

describe('CharityDashboard', () => {

	it('should render correctly', () => {
    const wrapper = shallow(<CharityDashboard />)
    expect(toJson(wrapper)).toMatchSnapshot()
	})

});