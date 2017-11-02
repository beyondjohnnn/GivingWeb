import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

import css from './MemberDetails.scss'

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

class MemberDetails extends Component {

	createTags(member) {
		let tags
		if (member.tags) {
			tags = member.tags.split(',')
		} else {
			tags = ["music", "food", "art"]
		}
		return tags.map((tag, id) => {
			return <Link key={id} to=""><p className="member-tag">{tag}</p></Link>
		})
	}

	render() {
		const { currentMember } = this.props
		const shareUrl = 'https://www.npmjs.com/package/react-share';
		const title = `Help support ${currentMember.name} reach their target`;

		return (
			<div className="member-details">
				<div className="member-image-basic-info">
					<img src={currentMember.url_image}/>
					<div className="linear-gradient"></div>
					<div className="member-photo-text-container">
						<h3>{currentMember.name}</h3>
						<p>
							<i className="fa-icon fa fa-map-marker" aria-hidden="true"></i>
							{currentMember.location}
						</p>
						<div className="member-tags">
							<i className="fa-icon fa fa-tags" aria-hidden="true"></i>
							{this.createTags(currentMember)}
						</div>
					</div>
				</div>
				<div className="social-media">
					<FacebookShareButton url={shareUrl} quote={title}> <button className="facebook"><i className="fa fa-facebook"></i>Share</button></FacebookShareButton>
					<TwitterShareButton url={shareUrl} quote={title}> <button className="twitter"><i className="fa fa-twitter"></i>Tweet</button></TwitterShareButton>
					<GooglePlusShareButton url={shareUrl} quote={title}> <button className="google-plus"><i className="fa fa-google-plus"></i>Share</button></GooglePlusShareButton>
					<button className="widgets"><i className="fa fa-code" aria-hidden="true"></i>Widgets</button>
					<input type="url" readOnly="true" value={`https://givingweb.io/${currentMember.name}`}></input>
				</div>
				<div className="share-message">
					<h3>&#10551;</h3>
					<p>Sharing my story lets my voice reach more people!</p>
				</div>
				<div className="loaded-story">
					{ReactHtmlParser(currentMember.info.replace('&#039;', '\''))}
				</div>
			</div>
		)
	}
}

export default MemberDetails