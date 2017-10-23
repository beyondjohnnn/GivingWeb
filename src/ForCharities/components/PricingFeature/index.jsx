import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../../actions/pricingActionCreators'

// import Tooltip from '../PricingTooltip'
import css from './PricingFeature.scss'

class PricingFeature extends React.Component {

  createTooltipStyle(expectedState) {

    if (this.props.currentTooltip == expectedState) {
      return 'tooltip-component tooltip-visible'
    } else {
      return 'tooltip-component'
    }
  }
       
  render() {
    return (
      <div className="pricing-feature">
        <h3 className="pricing-feature-text">{this.props.text}</h3> 
        <i className="fa fa-question-circle" aria-hidden="true" onMouseEnter={this.props.revealTooltip.bind(this, `${this.props.uniqueID}`)} onMouseLeave={this.props.revealTooltip.bind(this, "")}></i>
        <div className={this.createTooltipStyle(`${this.props.uniqueID}`)}>
          <div className="tooltip-arrow"></div>
          <div className="tooltip-box"> 
            <p className="tooltip-text">{this.props.tooltipText}</p>
          </div> 
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, routing) {
  return { ...state.pricing, ...routing }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PricingFeature)
