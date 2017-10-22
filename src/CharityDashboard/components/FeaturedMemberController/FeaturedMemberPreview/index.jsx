import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import css from './FeaturedMemberPreview.scss'
import * as actionCreators from '../../../../actions/charityDashBoardContentActionCreators'


class FeaturedMemberPreview extends React.Component {

	deleteMember() {
		this.props.deleteFeaturedMember(this.props.member.id)
	}

	addMember() {
		this.props.createFeaturedMember(this.props.member.id)
	}

	render() {
		let member = this.props.member
		return (
			<div className="featured-member-preview">
				<div className="member-one">
					<div className="del-div">
						<p className="delete" onClick={this.deleteMember.bind(this)}>x</p>
					</div>
					<img src={member.url_image} alt="http://via.placeholder.com/80x80?text=Add_Image"/>
					<h3>{member.name}</h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.charityDashboardContent, ...routing}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMemberPreview)
