import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionCreators from '../../actions/newMemberProcess'

import css from './NewMemberFormCoverPhoto.scss'

class NewMemberFormCoverPhoto extends React.Component {

	handleSubmit(e) {
		e.preventDefault()

		this.props.setCurrentTab('review-launch')
	}

	handleImageChange(e) {
		e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.props.readFile(file, reader.result)
    }
    reader.readAsDataURL(file)
	}

	render() {
		let {imagePreviewUrl} = this.props;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<img src="http://via.placeholder.com/300x300" alt="" />);
    }

		return (
			<div className="new-member-form-cover-photo">
				{$imagePreview}
				<div className="controls">
					<p>Please pick a nice photo. This will be the photo that potential doners will see.</p>
					<form onSubmit={this.handleSubmit.bind(this)}>
	          <input className="file-input" type="file" onChange={this.handleImageChange.bind(this)} />
	          <input className="submit-button" type="submit" value="Next" />
	        </form>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewMemberFormCoverPhoto)