import React from 'react'
import { shallow } from 'enzyme'
import Header from 'components/pages/Header'

describe('<Header /> component default', () => {
	let wrapper

	wrapper = shallow(<Header />)

	it('<Header /> mount', () => {
		expect(wrapper.exists()).toBe(true)
	})
})
