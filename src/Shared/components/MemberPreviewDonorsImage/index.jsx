import React from 'react'
import { Link } from 'react-router-dom'


import css from './MemberPreviewDonorsImage.scss'


class MemberPreviewDonorsImage extends React.Component {

  constructor(props){
    super(props)
  }

  // createTooltipStyle() {
  //   if (this.props.tooltipVisible) {
  //     return 'tooltip-component tooltip-visible'
  //   } else {
  //     return 'tooltip-component'
  //   }
  // }


  // this.createTooltipStyle()

  render() {
    return (

      <div className="member-preview-donors-image">
        <img onMouseEnter={this.props.toggleTooltip} onMouseLeave={this.props.toggleTooltip} src={`./images/bear-${this.props.color}.png`}></img>
        <div className="tooltip-component tooltip-visible">
          <div className="tooltip-arrow"></div>
          <div className="tooltip-box"> 
            <p className="tooltip-text">{`${this.props.comment.comment_author} ${this.props.comment.donation_amount}`}</p>
          </div> 
        </div>
      </div>
    )
  }
}

export default MemberPreviewDonorsImage
