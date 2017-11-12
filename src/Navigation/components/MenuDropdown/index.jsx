import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'

import * as actionCreators from '../../../actions/navActionCreators'

import css from './MenuDropdown.scss'
import StartFundraisingModal from '../../../Shared/components/StartFundraisingModal'


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
    const menuButtonBoundaries = document.querySelector('.menu-button').getBoundingClientRect()
    const outsideMenuButton = (e.x < menuButtonBoundaries.left || e.x > menuButtonBoundaries.right || e.y < menuButtonBoundaries.top || e.y > menuButtonBoundaries.bottom)

    if (outsideMenuButton && this.props.dropdownVisible) {
      this.props.toggleDropdown()
    }
  }


  componentWillUnmount() {
    window.removeEventListener('click', this.hideDropdownOnClick)
  }

  renderModal() {
    if(this.props.fundraisingModalVisible) {
      return <StartFundraisingModal />
    }
  }

  render() {
    return (
      <div ref="container" className={this.props.styling}>
        <div className="tooltip"></div>
        <div className="menu-dropdown">
          <h3 className="menu-link-text" onClick={this.props.toggleModal}>Start Fundraising</h3>
          <Link to="/help-someone" className="menu-link-text">Help Someone</Link>
          <div/>
          <Link to="/charities" className="menu-link-text">For Charities</Link>
          <div/>
          <Link to="" className="menu-link-text">Help</Link>
          <Link to="/about-us" className="menu-link-text">About Us</Link>
        </div>
        {this.renderModal()}
      </div>
    )
  }
}

function mapStateToProps(state, routing) {
  return Object.assign({}, state.navigation, state.fundraisingModal, routing)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuDropdown)
