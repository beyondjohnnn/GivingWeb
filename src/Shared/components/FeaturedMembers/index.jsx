import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import * as actionCreators from '../../../actions/helpSomeoneActionCreators'

import css from './FeaturedMembers.scss'

import MemberPreviewBuilder from '../../components/MemberPreviewBuilder'

class FeaturedMembers extends React.Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.getFeaturedMembers();
	}

	render() {
		return (
			<div className="featured-members">
				<h2>Featured Members</h2>
				<div className="members-list">
					<MemberPreviewBuilder members={this.props.members} previewsPerLine={3}/>
				</div>
				<Link to="/help-someone" className="see-more-link">See more members</Link>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
  return { ...state.helpSomeone, ...routing}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMembers)
