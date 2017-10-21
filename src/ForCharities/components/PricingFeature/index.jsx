import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../../../actions/pricingActionCreators'

// import Tooltip from '../PricingTooltip'
import css from './PricingFeature.scss'

class PricingFeature extends React.Component {

  // createTooltipStyle() {
  //   return this.props.tooltipVisible ? "tooltip-component care-button-tooltip" : "tooltip-component care-button-tooltip hidden"
  // }
        // <button onMouseEnter={this.props.toggleTooltip} onMouseLeave={this.props.toggleTooltip}>
        //   <Tooltip style={this.createTooltipStyle()} text="Click here to follow the charities progress" />
        //   <i className="fa fa-heart-o"></i>
        //   Care
        // </button>

        // <i className="fa fa-check" aria-hidden="true"></i>
  render() {
    return (
      <div className="pricing-feature">
        <h3 className="pricing-feature-text">{this.props.text}</h3> 
        <i className="fa fa-question-circle" aria-hidden="true"></i>
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
