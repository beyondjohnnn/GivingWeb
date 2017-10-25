import React, {Component} from 'react'
import moment from 'moment'
import _ from 'lodash'

import css from './CommentSection.scss'

import CommentGrouping from '../CommentGroup'
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

	createCommentGroups() {
		const { comments } = this.props
		const groups = _.groupBy(comments, comment => {
			const date = new Date(comment.comment_date)
		  return moment(date).startOf('day').format()
		})

		let commentGroups = []
		for (let date in groups) {
			commentGroups.push(<CommentGrouping key={date} date={date} comments={groups[date]} />)
		}

		return commentGroups
	}

	render() {
		return (
			<div className="make-comment">
				<h3>Post a comment</h3>
				<label htmlFor="comment-box">Send a message</label>
				<textarea id="comment-box" ref="comment-box" className="comment-box" />
				<button className="post-button">Post</button>
				<div className="comment-list">
					{this.createCommentGroups()}
				</div>
			</div>
		)
	}
}

export default CommentSection