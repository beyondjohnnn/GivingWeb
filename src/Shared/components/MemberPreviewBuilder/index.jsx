import React from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'

import css from './MemberPreviewBuilder.scss'

import MemberPreview from '../../components/MemberPreview'

class HelpSomeonePage extends React.Component {

	buildMemberPreviews(){
    let members = this.props.members
    let previewsPerLine = this.props.previewsPerLine;
		let memberPreviews = [];

		let previewClassName;
		switch(previewsPerLine){
			case 1: previewClassName = "member-previews-one-column"
			case 2: previewClassName = "member-previews-two-column"
			case 3: previewClassName = "member-previews-three-column"
		}

		let row = [];
		for(let index in members){
			let previewStyle = null;
			if(index % previewsPerLine !== previewsPerLine - 1) previewStyle = {"marginRight": "4.5%"}
			row.push(<MemberPreview
				key={index}
				className={previewClassName}
				style={previewStyle}
				member={members[index]} />
			);

			if(row.length === previewsPerLine){
				memberPreviews.push(
					<div className="member-preview-row" key={index}>{row}</div>
				);
				row = [];
			}
		}

		if(row.length !== 0){
			memberPreviews.push(
				<div className="member-preview-row" key="last-row">{row}</div>
			);
		}

		return memberPreviews;
	}

	render() {
		return (
			<div className="member-preview-builder">
				{this.buildMemberPreviews(this.props.members)}
			</div>
		)
	}
}

export default HelpSomeonePage
