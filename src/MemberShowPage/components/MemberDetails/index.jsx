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
		if(!member.tags) member.tags = ["music", "food", "art"]
		return member.tags.map((tag, id) => {
			return <Link key={id} to=""><p className="member-tag">{tag}</p></Link>
		})
	}

	render() {
		const { current_member } = this.props
		const shareUrl = 'https://www.npmjs.com/package/react-share';
		const title = `Help support ${current_member.name} reach their target`;

		return (
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
					<input type="url" readOnly="true" value={`https://givingweb.io/${current_member.name}`}></input>
				</div>
				<div className="share-message">
					<h3>&#10551;</h3>
					<p>Sharing my story lets my voice reach more people!</p>
				</div>
				<div className="loaded-story">
					{ReactHtmlParser(current_member.info.replace('&#039;', '\''))}
				</div>
			</div>
		)
	}
}

export default MemberDetails