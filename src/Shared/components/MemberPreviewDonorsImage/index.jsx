import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {connect}  from 'react-redux'


import css from './MemberPreviewDonorsImage.scss'

import * as actionCreators from '../../../actions/memberPreviewActionCreators'

class MemberPreviewDonorsImage extends React.Component {

  constructor(props){
    super(props)
  }

  createTooltipStyle() {
    // if (this.props.donorTooltipSet == this.props.comment.comment_date ) {
      return 'tooltip-component tooltip-visible'
  //   } else {
  //     return 'tooltip-component'
  //   }
  }


  // this.createTooltipStyle()

  render() {

    console.log(this.props.comment.comment_date)
    return (

      <div className="member-preview-donors-image" >
        <img src={`./images/bear-${this.props.color}.png`} onMouseEnter={this.props.setDonorTooltipByDate.bind(this, this.props.comment.comment_date)} onMouseLeave={this.props.setDonorTooltipByDate.bind(this, "")}></img>
        <div className="tooltip-component">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-box"> 
            <p className="tooltip-text">{`${this.props.comment.comment_author} ${this.props.comment.donation_amount}`}</p>
          </div> 
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, routing) {
  return { ...state.memberPreview, ...routing }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberPreviewDonorsImage)

