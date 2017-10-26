import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as actionCreators from '../../../actions/navActionCreators'

import css from './SearchCharityPreview.scss'
import { calcDonationPercentage, getDonationBarColour, calcTotalDonations } from '../../../Shared/utils/donations'

class SearchCharityPreview extends Component {
	render() {
		return (
      <Link className="charity-link" to={`/charity-page`} onClick={this.props.toggleSearchResultsVisibility}>
        <div className="search-charity-preview">
          <div className="image-cover"> 
            <img src={this.props.logoUrl} alt=""/>
          </div>
          <div className="charity-preview-info">
            <h3>{this.props.charity.name}</h3>
            <h2>We go out, we seek, we find and connect to find a solution on "your terms & pace".</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchCharityPreview)