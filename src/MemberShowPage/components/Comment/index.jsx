import React from 'react'
import Moment from 'react-moment'

import css from './Comment.scss'

class Comment extends React.Component {

	renderBearImage() {
		const author = this.props.comment.comment_author

		if (author[0] >= 'A' && author[0] <= 'G') {
			return './images/bear-blue.png'
		} else if(author[0] >= 'H' && author[0] <= 'N') {
			return './images/bear-yellow.png'
		} else if(author[0] >= 'O' && author[0] <= 'S') {
			return './images/bear-red.png'
		} else {
			return './images/bear-green.png'
		}
	}
	
	render() {
		const { comment } = this.props
		const date = new Date(comment.comment_date)
		return (
			<div className="comment">
				<div className="comment-header">
					<img src={this.renderBearImage()} />
					<div className="header-details">
						<h4><span>{comment.comment_author}</span> {comment.donation_amount}</h4>
						<p><Moment date={date} format="MMM DD, YYYY"/> at <Moment date={date} format="HH:mm"/></p>
					</div>
				</div>
				<div className="comment-content">
					<p>{comment.comment_content.replace('&#039;', '\'')}</p>
				</div>
			</div>
		)
	}
}

export default Comment