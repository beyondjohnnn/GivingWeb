import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import * as actionCreators from '../actions/navActionCreators'

import css from './MenuDropdown.scss'

class MenuDropdown extends React.Component {

  constructor(props) {
    super(props)
    this.hideDropdownOnClick = this.hideDropdownOnClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('click', this.hideDropdownOnClick)
  }

  hideDropdownOnClick(e) {
    const componentBoundaries = this.refs.container.getBoundingClientRect()
    // console.log(componentBoundaries)
    if ((e.x < componentBoundaries.left || e.x > componentBoundaries.right || e.y < componentBoundaries.top || e.y > componentBoundaries.bottom) && this.props.dropdownVisible) {
        console.log('in hideDropdownOnClick function')
        this.props.toggleDropdown()
    }
  }
    

  componentWillUnmount() {
    window.removeEventListener('click', this.hideDropdownOnClick)
  }

  render() {
    return (
      <div ref="container" className={this.props.styling}>
        <div className="tooltip"></div>
        <div className="menu-dropdown"> 
          <Link to="">I</Link>
          <Link to="">am</Link>
          <Link to="">a</Link>
          <Link to="">innk</Link>
          <Link to="">bink</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, routing) {
  return Object.assign({}, state.navigation, routing)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDropdown)