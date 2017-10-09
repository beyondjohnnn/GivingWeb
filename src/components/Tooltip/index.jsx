import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'

// import * as actionCreators from '../../actions/navActionCreators'

import css from './Tooltip.scss'

class Tooltip extends React.Component {


  render() {
    return (
      <div className={this.props.style}> 
        <div className="tooltip-arrow"></div>
        <p className="tooltip-text">{this.props.text}</p> 
      </div>
    )
  }


}

export default Tooltip
