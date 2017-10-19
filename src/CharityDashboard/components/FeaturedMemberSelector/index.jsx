import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Modal from 'react-modal'
import css from './FeaturedMemberSelector.scss'
import * as actionCreators from '../../../actions/charityDashBoardContentActionCreators'


class FeaturedMemberSelector extends React.Component {

	addMember() {
		this.props.createFeaturedMember(this.props.member.id)
	}
	componentDidMount() {
		// Modal.setAppElement("#modal")
		// <Modal
		//   isOpen={false}
		//   onAfterOpen={afterOpenFn}
		//   onRequestClose={requestCloseFn}
		//   closeTimeoutMS={n}
		//   style={customStyle}
		//   contentLabel="Modal"
		// >
		// </Modal>
	}


	render() {
		let member = this.props.member
		return (
			<div className="featured-member-selector">
				<div className="member-one">
					<div className="del-div">
					</div>
					<div id="modal">
					 <select>
					 	{this.props.members.map((member)=>{<option key={member.id}>{member.name}</option>})}
					 </select>
					</div>
					<div className="member-placeholder">Click To Add Member</div>
					<h3>member</h3>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.helpSomeone, ...state.charityDashboardContent, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedMemberSelector)
