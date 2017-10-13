import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../utils/donations'

import * as actionCreators from '../../actions/helpSomeoneActionCreators'

import css from './MemberShowPage.scss'

import Comment from '../../components/Comment'

class MemberShowPage extends React.Component {

	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const member_id = parseInt(this.props.location.search.split('=')[1])
		const { members } = this.props
		if (members.length == 0) {
			this.props.getSingleMember(member_id)
		} else {
			const current_member = members.find((member) => {
				return member.id == member_id
			})
			this.props.setCurrentMember(current_member)
		}
	}

	createComments() {
		const { current_member } = this.props
		return current_member.comments.map((comment, id) => {
			return <Comment key={id} comment={comment} />
		})
	}

	createTags(member) {
		if(!member.tags) member.tags = ["music", "food", "art"]
		return member.tags.map((tag, id) => {
			return <Link key={id} to=""><p className="member-tag">{tag}</p></Link>
		})
	}

	render() {
		const { current_member } = this.props
		const totalDonations = calcTotalDonations(current_member)
		const donationPercentage = calcDonationPercentage(current_member)
		const textPercentage = donationPercentage + '%'
		const donationBarColour = getDonationBarColour(donationPercentage)
		const donationBarStyles = {
			width: textPercentage,
			backgroundColor: donationBarColour
		}

		const photoStyle = {
			backgroundImage: `linear-gradient(360deg, rgba(10, 10, 10, 0.75), rgba(250, 250, 250, 0)),
					url("images/${current_member.name}.png")`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundPosition: "center"
		}

		return (
			<div className="member-show-page">
				<div className="header">
					<h2>{current_member.snippet}</h2>
					<h3><i className="fa fa-check-circle-o" />Verified by <Link to="/charity-page" className="verified-charity-link">Streetwork</Link></h3>
				</div>
				<div className="left-section">
					<div className="member-details">
						<div className="member-photo" style={photoStyle}></div>
						<div className="member-photo-text-container">
							<h3>{current_member.name}</h3>
							<p>
								<i className="fa-icon fa fa-map-marker" aria-hidden="true"></i>
								 {current_member.location}
							</p>
							<div className="member-tags">
								<i className="fa-icon fa fa-tags" aria-hidden="true"></i>
								{this.createTags(current_member)}
							</div>
						</div>
						<div className="social-media">
							<button>share</button>
							<button>tweet</button>
							<button>share</button>
						</div>
						<div className="loaded-story">
							{ReactHtmlParser(current_member.info.replace('&#039;', '\''))}
						</div>
					</div>
					<div className="make-comment">
						<h3>Post a comment</h3>
						<label htmlFor="comment-box">Send a message</label>
						<textarea id="comment-box" ref="comment-box" className="comment-box" />
						<button className="post-button">Post</button>
						<div className="comment-list">
							{this.createComments()}
						</div>
					</div>

				</div>
				<div className="right-section">
					<div className="donation-section">
						<h4>£{totalDonations}</h4>
						<p>raised of £{current_member.goal} goal</p>
						<div className="member-progress-bar">
							<div className="bar-fill" style={donationBarStyles}></div>
						</div>
						<div className="progress-summary">
							<p>£{current_member.goal - totalDonations} still needed</p>
							<p>{current_member.donations.length} supporters</p>
						</div>
						<div className="donation-controls">
							<h4>
								Select Donation amount
							</h4>
							<select>
								<option value="25">£25</option>
								<option value="50">£50</option>
								<option value="75">£75</option>
								<option value="custom">Custom amount</option>
							</select>
							<div className="support-checkbox">
								<input id="checkbox" type="checkbox" />
								<label htmlFor="checkbox">Add £3 to help support GivingWeb</label>
							</div>
						</div>
						<div className="message-controls">
							<label htmlFor="message">Send a message</label>
							<textarea className="message-text" />
							<div className="name-hide">
								<input id="checkbox-hidename" type="checkbox" />
								<label htmlFor="checkbox-hidename">Hide my name</label>
							</div>
						</div>
						<button className="donate-button">DONATE NOW</button>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return Object.assign({}, state.helpSomeone, routing)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberShowPage)
