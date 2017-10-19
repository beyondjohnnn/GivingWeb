import React, {Component} from 'react'

import css from './CommentSection.scss'

import Comment from '../Comment'

class CommentSection extends Component {

	constructor(props) {
		super(props)
	}

	createComments() {
		const { comments } = this.props
		return comments.map((comment, id) => {
			return <Comment key={id} comment={comment} />
		})
	}

	render() {
		return (
			<div className="make-comment">
				<h3>Post a comment</h3>
				<label htmlFor="comment-box">Send a message</label>
				<textarea id="comment-box" ref="comment-box" className="comment-box" />
				<button className="post-button">Post</button>
				<div className="comment-list">
					{this.createComments()}
				</div>
			</div>
		)
	}
}

export default CommentSection