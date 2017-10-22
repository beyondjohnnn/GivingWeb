import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../../actions/charityDashBoardContentActionCreators'

import FeaturedMemberPreview from './FeaturedMemberPreview'
import FeaturedMemberSelector from './FeaturedMemberSelector'

import css from './FeaturedMemberController.scss'

class FeaturedMemberController extends React.Component {

	renderMembersImage() {
		if (this.props.member.url_image === undefined) {
			return `images/${this.props.member.name}.png`
		} else {
			return this.props.member.url_image
		}
	}//TODO: remove build images loop when refactoring

	componentDidMount(){
		this.props.getCharityFeaturedMembers(this.props.charity_id)
	}

	renderFeaturedMembers(){
		const featureMembersComponents = []
		let position = 1
		const members = this.props.charityFeaturedMembers
		for(let j=0; j<3; j++){
			let member = members[j]
			let component
			if(member != undefined){
				component = (
					<FeaturedMemberPreview
						key={position}
						member={member}
						position={position} />
				)
			}else{
				component = (
					<FeaturedMemberSelector
						key={position}
						position={position} />
				)
			}
			featureMembersComponents.push(component)
			position++
		}
		return featureMembersComponents
	}

	render() {
		return (
			<div className="featured-member-controller">
				<div className="title">
					<h3>Your Featured Members</h3>
				</div>
				{this.renderFeaturedMembers()}
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

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMemberController)
