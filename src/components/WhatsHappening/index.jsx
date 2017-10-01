import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../actions/howItWorksActionCreators'

import css from './WhatsHappening.scss'

import FeaturedMembers from '../FeaturedMembers'

class WhatsHappening extends React.Component {
	render() {
		return (
			<div>
				<FeaturedMembers />
			</div>
		)
	}
}

export default WhatsHappening