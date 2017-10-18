import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreators from '../../../actions/charityDashBoardContentActionCreators'

import FeaturedMemberPreview from './../FeaturedMemberPreview'

import css from './FeaturedMemberController.scss'

class FeaturedMemberController extends React.Component {

	renderMembersImage() {
		if (this.props.member.url_image === undefined) {
			return `images/${this.props.member.name}.png`
		} else {
			return this.props.member.url_image
		}
	}

	componentDidMount(){
		this.props.getCharityFeaturedMembers()
	}

	renderFeaturedMembers(){
		const featureMembersComponents = []
		let position = 1
		const members = this.props.charityFeaturedMembers
		for(let j=0; j<4; j++){
			let member = members[j]
			let component
			if(member !== null && member !== undefined){
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
			position++
		}
		return featureMembersComponents
	}

	renderController(){
		if(this.props.charityFeaturedMembers.length !== 0){
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

	render() {
		return (
			<div>
				{this.renderController()}
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
