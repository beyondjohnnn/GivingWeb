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
		const members = this.props.charityFeaturedMembers
		let memberIndex = 0
		for(let j=0; j<3; j++){
			let membersDetails = members[memberIndex]
			let component
			if(membersDetails && membersDetails.position === j){
				component = <FeaturedMemberPreview key={j} member={membersDetails.member} position={j} />
				memberIndex++
			}else{
				component = (<FeaturedMemberSelector key={j} position={j} />)
			}
			featureMembersComponents.push(component)
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
