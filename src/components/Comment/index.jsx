import React from 'react'

import css from './Comment.scss'

class Comment extends React.Component {
	render() {
		const comment = this.props.comment
		return (
			<div className="comment">
				<div className="comment-header">
					<img src="http://placehold.it/50x50" />
					<div className="header-details">
						<h4><span>{comment.comment_author}</span> {comment.donation_amount}</h4>
						<p>{comment.comment_date.toString()}</p>
					</div>
				</div>
				<div className="comment-content">{comment.comment_content}</div>
			</div>
		)
	}
}

export default Comment