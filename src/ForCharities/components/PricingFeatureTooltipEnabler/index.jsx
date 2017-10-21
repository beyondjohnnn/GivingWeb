import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../../actions/pricingActionCreators'

// import Tooltip from '../PricingTooltip'
import css from './PricingFeatureTooltipEnabler.scss'

class PricingFeatureTooltipEnabler extends React.Component {

  // createTooltipStyle() {
  //   return this.props.tooltipVisible ? "tooltip-component care-button-tooltip" : "tooltip-component care-button-tooltip hidden"
  // }

  render() {
    return (
      <div className="pricing-feature-tooltip-enabler">
        <button onMouseEnter={this.props.toggleTooltip} onMouseLeave={this.props.toggleTooltip}>
          <Tooltip style={this.createTooltipStyle()} text="Click here to follow the charities progress" />
          <i className="fa fa-heart-o"></i>
          Care
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(PricingFeatureTooltipEnabler)
