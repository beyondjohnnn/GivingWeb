import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../utils/donations'

import * as actionCreators from '../../../actions/helpSomeoneActionCreators'

import css from './MemberShowPage.scss'

import Comment from '../../components/Comment'

import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');


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
		const shareUrl = 'https://www.npmjs.com/package/react-share';
		// const shareUrl = '`http://localhost:8080/member?member_id=${current_member.id}`';
		const title = `Help support ${current_member.name} reach their target`;

		// const photoStyle = {
		// 	backgroundImage: `linear-gradient(360deg, rgba(10, 10, 10, 0.2), rgba(250, 250, 250, 0)),
		// 			url("images/${current_member.name}.png")`,
		// 	backgroundRepeat: "no-repeat",
		// 	backgroundSize: "cover",
		// 	backgroundPosition: "center",
		// 	width: "100%",
		// 	height: '400px'
		// 	}

		return (
			<div className="member-show-page">
				<div className="main-wrapper">
					<div className="header">
						<h2>{current_member.snippet}</h2>
						<h3><i className="fa fa-check-circle-o" />Verified by <Link to="/charity-page" className="verified-charity-link">Streetwork</Link></h3>
					</div>
					<div className="left-section">
						<div className="member-details">
							<div className="member-image-basic-info">
								<img src={`images/${current_member.name}.png`}/>
								<div className="linear-gradient"></div>
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
							</div>

							<div className="social-media">
								<FacebookShareButton url={shareUrl} quote={title}> <button className="facebook"><i className="fa fa-facebook"></i>Share</button></FacebookShareButton>
								<TwitterShareButton url={shareUrl} quote={title}> <button className="twitter"><i className="fa fa-twitter"></i>Tweet</button></TwitterShareButton>
								<GooglePlusShareButton url={shareUrl} quote={title}> <button className="google-plus"><i className="fa fa-google-plus"></i>Share</button></GooglePlusShareButton>
								<button className="widgets"><i className="fa fa-code" aria-hidden="true"></i>Widgets</button>
								<input type="url" value={`https://givingweb.io/${current_member.name}`}></input>
							</div>
							<div className="share-message">
								<h3>&#10551;</h3>
								<p>Sharing my story lets my voice reach more people!</p>
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
						</div>
						<div className="make-comment">
							<div className="comment-list">
								{this.createComments()}
							</div>
						</div>
					</div>
					<div className="right-section">
						<div className="donation-section">
							<h4>£{totalDonations}</h4>
							<h2>raised of £{current_member.goal} goal</h2>
							<div className="member-progress-bar">
								<div className="bar-fill" style={donationBarStyles}></div>
							</div>
							<div className="progress-summary">
								<p>£{current_member.goal - totalDonations} still needed</p>
								<p className="supporters-text">{current_member.donations.length} supporters</p>
							</div>
							<div className="donation-controls">
								<h3>
									Select Donation amount
								</h3>
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
