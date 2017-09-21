import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import css from './MenuDropdown.scss'

class MenuDropdown extends React.Component {
  render() {
    return (
      <div className={this.props.styling}>
        <span></span>
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

export default MenuDropdown