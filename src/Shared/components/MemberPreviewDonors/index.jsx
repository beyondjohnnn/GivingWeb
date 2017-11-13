import React from 'react'
import { Link } from 'react-router-dom'


import css from './MemberPreviewDonors.scss'

import MemberPreviewDonorsImage from '../MemberPreviewDonorsImage'


class MemberPreviewDonors extends React.Component {

  constructor(props){
    super(props)
  }

  createTooltipStyle() {
    if (this.props.tooltipVisible) {
      return 'tooltip-component tooltip-visible'
    } else {
      return 'tooltip-component'
    }
  }

  renderExtraDonorCount() {
    const comments = this.props.member.comments

    if(comments.length > 4) {
      return <p>+{comments.length - 4}</p> 
    }
  }


  renderBearImage() {
    const comments = this.props.member.comments
    const maxFiveComments = comments.slice(0, 4)
    return maxFiveComments.map((comment, id) => {
      // console.log(comment)
      if (comment.comment_author[0] >= 'A' && comment.comment_author[0] <= 'G') {
        return <MemberPreviewDonorsImage key={id} color="blue" comment={comment}/>
      } else if(comment.comment_author[0] >= 'H' && comment.comment_author[0] <= 'N') {
        return <MemberPreviewDonorsImage key={id} color="yellow" comment={comment}/>
      } else if(comment.comment_author[0] >= 'O' && comment.comment_author[0] <= 'S') {
        return <MemberPreviewDonorsImage key={id} color="green" comment={comment}/>
      } else {
        return <MemberPreviewDonorsImage key={id} color="red" comment={comment}/>
      }
    })
  }



  render() {


    return (
      <div className="member-preview-donors">
        <i className="fa fa-heart"></i> 
        {this.renderBearImage()}
        {this.renderExtraDonorCount()}
      </div>
    )
  }
}

export default MemberPreviewDonors
