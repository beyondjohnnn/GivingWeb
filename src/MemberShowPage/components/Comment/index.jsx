import React from 'react'
import Moment from 'react-moment'

import css from './Comment.scss'

class Comment extends React.Component {


	render() {
		const { comment } = this.props
		const date = new Date(comment.comment_date)
		return (
			<div className="comment">
				<div className="comment-header">
					<img src="https://placehold.it/50x50" />
					<div className="header-details">
						<h4><span>{comment.comment_author}</span> {comment.donation_amount}</h4>
						<p><Moment date={date} format="MMM DD, YYYY"/> at <Moment date={date} format="HH:mm"/></p>
					</div>
				</div>
				<div className="comment-content">{comment.comment_content.replace('&#039;', '\'')}</div>
			</div>
		)
	}
}

export default Comment