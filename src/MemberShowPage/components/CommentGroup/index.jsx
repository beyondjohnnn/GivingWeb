import React, {Component} from 'react'
import Moment from 'react-moment'

import css from './CommentGroup.scss'

import Comment from '../Comment'

class CommentGroup extends Component {

	constructor(props) {
		super(props)

		this.createComments = this.createComments.bind(this)
	}

	createComments() {
		const { comments } = this.props
		return comments.map((comment, id) => {
			return <Comment key={id} comment={comment} />
		})
	}

	render() {
		return (
			<div className="comment-group">
				<h3 className="group-date"><Moment date={this.props.date} format="DD, MMM"/></h3>
				{this.createComments()}
			</div>
		)
	}
}

export default CommentGroup