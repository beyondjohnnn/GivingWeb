
import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormReviewLaunch.scss'

import { isStringValid, isMonetaryValueValid } from "./../../utils/validator"

class NewMemberFormReviewLaunch extends React.Component {


	constructor(props){
		super(props)
		this.onClickSubmit = this.onClickSubmit.bind(this)
	}

	saveImage(){
		const imgObj = {
			img: this.props.imagePreviewUrl
		}

		const s3 = new AWS.S3()
		const myBucket = 'givingweb-storage/images' + uuidV1()
		const myKey = 'myBucketKey'
		s3.createBucket({Bucket: myBucket}, function(err, data) {
		if (err) {
		   console.log(err)
		   } else {
		     params = {Bucket: myBucket, Key: myKey, Body: this.props.imagePreviewUrl}
		     s3.putObject(params, function(err, data) {
		         if (err) {
		             console.log(err)
		         } else {
		             console.log("Successfully uploaded data to myBucket/myKey")
		         }
		      })
		   }
		})
	}

	onClickSubmit(){

		if(isStringValid(this.props.name) &&
			isMonetaryValueValid(this.props.goal) &&
			isStringValid(this.props.location) &&
			isStringValid(this.props.story.reasonForUse) &&
			isStringValid(this.props.story.story) &&
			isStringValid(this.props.story.futureGoals)
		){
			this.saveImage()
			this.props.submitNewMember({
				name: this.props.name,
				goal: this.props.goal,
				location: this.props.location,
				info: this.makeMemberStory(this.props.story)
			})
		}else{
			console.log("invalid input");
		}

	}

	makeMemberStory(story) {
	  const tempObj = [
	    "<h3> Why I'am Using GivingWeb </h3>",
	    "<p>", story.reasonForUse, "</p>",
	    "<h3> My Story </h3>",
	    "<p>", story.story, "</p>",
	    "<h3> My Future Goals </h3>",
	    "<p>", story.futureGoals, "</p>"
	  ]

	  const htmlString = tempObj.join("")
	  return htmlString
	}

	render() {
		return (
			<div className="new-member-form-review-launch">
				<p>Please review the details below and when you're happy, click submit.</p>

				<img src={this.props.imagePreviewUrl} />

				<h3>Name</h3>
				<p>{this.props.name}</p>

				<h3>Fundraising Goal</h3>
				<p>£ {this.props.goal}</p>

				<h3>Location</h3>
				<p>{this.props.location}</p>

				<h3>Reason for use</h3>
				<p>{this.props.story.reasonForUse}</p>

				<h3>Story</h3>
				<p>{this.props.story.story}</p>

				<h3>Future goals</h3>
				<p>{this.props.story.futureGoals}</p>

				<button className="submit-button" onClick={this.onClickSubmit}>Submit</button>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
	return { ...state.newMemberProcess, ...routing }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMemberFormReviewLaunch)
