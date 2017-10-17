import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import * as actionCreators from '../../../actions/helpSomeoneActionCreators'

import css from './CharityFeaturedMembers.scss'

//TODO: used for mulipulte pages
import MemberPreviewBuilder from '../../../Shared/components/MemberPreviewBuilder'

class CharityFeaturedMembers extends React.Component {

	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.getCharityFeaturedMembers(1)
		//TODO: you'll need to setup the getCharityFeaturedMembers to take in the charity ID by the params when there are more then just one charity being hardcoded into the app
	}

	render() {
		return (
			<div className="featured-members">
				<h2>Charity Featured Members</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(CharityFeaturedMembers)
