import React, {Component} from 'react'
import moment from 'moment'
import _ from 'lodash'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/comments'

import css from './CommentSection.scss'

import CommentGrouping from '../CommentGroup'
import Comment from '../Comment'

class CommentSection extends Component {

	constructor(props) {
		super(props)

		this.handleCommentChange = this.handleCommentChange.bind(this)
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

	handleCommentChange(e) {
		e.preventDefault()
		const commentText = this.refs.comment_box.value
		this.props.updateNewCommentText(commentText)
	}

	render() {
		return (
			<div className="comment-section">
				<div className="make-comment">
					<h3>Post a comment</h3>
					<label htmlFor="comment-box">Send a message</label>
					<textarea id="comment-box" ref="comment_box" className="comment-box" maxLength="300" onChange={this.handleCommentChange} placeholder="Leave a comment..."/>
					<button className="post-button">Post</button>
					<span className="comment-length">{300 - this.props.commentText.length} / 300 left</span>
				</div>
				<div className="comment-list">
					{this.createCommentGroups()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.comments, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection)