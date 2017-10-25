import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/navActionCreators'

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

    console.log(member.id)

    const percentage = calcDonationPercentage(member)
    const textPercentage = percentage.toString() + "%"
    const donationBarStyles = {
      "width": textPercentage,
      "backgroundColor": getDonationBarColour(percentage)
    }
    return (
      <Link className="member-link-search-member" to={`/member?member_id=${member.id}`} onClick>
        <div className="search-member-preview">
          <div className="image-cover"> 
            <img src={this.renderMembersImage()} alt=""/>
          </div>
          <div className="member-preview-info">
            <h3>{member.name}</h3>
            <h2>{member.snippet}</h2>
          </div>
          <div className="donation-details-member-preview">
              <p>{textPercentage}</p>
              <div className="member-progress-bar">
                <div className="bar-fill" style={donationBarStyles}></div>
              </div>
          </div>
        </div>
      </Link>
    )
  }
}
function mapStateToProps(state, routing) {
  return { ...state.navigation, ...routing }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMemberPreview)