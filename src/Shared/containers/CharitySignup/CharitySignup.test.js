import * as React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

import CharitySignup from './index'

const middlewares = [] // add your middlewares like `redux-thunk` 
const mockStore = configureStore(middlewares)


describe('CharitySignup', () => {

	it('should render correctly', () => {
		const store = mockStore({})
    const wrapper = shallow(<CharitySignup store={store} />)
    expect(toJson(wrapper)).toMatchSnapshot()
	})

 });