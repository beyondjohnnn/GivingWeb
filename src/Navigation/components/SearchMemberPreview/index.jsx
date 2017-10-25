import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import css from './SearchMemberPreview.scss'
import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../../Shared/utils/donations'


class SearchMemberPreview extends Component {

  renderMembersImage() {
    if (this.props.member.url_image == undefined) {
      return `images/${this.props.member.name}.png`
    } else {
      return this.props.member.url_image
    }
  }

  render() {
    let previewStyle = this.props.style || {}
    const {member} = this.props

    const percentage = calcDonationPercentage(member)
    const textPercentage = percentage.toString() + "%"
    const donationBarStyles = {
      "width": textPercentage,
      "backgroundColor": getDonationBarColour(percentage)
    }
    return (
      <div className="search-member-preview">
        <div className="image-cover"> 
          <img src={this.renderMembersImage()} alt=""/>
        </div>
        <div className="member-preview-info">
          <h3>{member.name}</h3>
          <h2>{member.snippet}</h2>
        </div>
        <div className="donation-details">
            <div className="member-progress-bar">
              <div className="bar-fill" style={donationBarStyles}></div>
            </div>
            <p className="donation-percentage">{textPercentage}</p>
        </div>
      </div>
    )
  }
}

export default SearchMemberPreview