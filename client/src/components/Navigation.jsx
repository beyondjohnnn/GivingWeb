import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'
import * as actionCreators from '../actions/navActionCreators'

import MenuDropdown from './MenuDropdown'

import css from './Navigation.scss'

class Navigation extends React.Component {

	renderDropdown() {
		if (this.props.dropdownVisible) {
			return <MenuDropdown styling="menu-dropdown-wrapper visible-dropdown" />
		} else {
			return <MenuDropdown styling="menu-dropdown-wrapper hidden-dropdown" />
		}
	}

	renderMenuButton() {
		if (this.props.dropdownVisible) {
			return <button className="menu-button menu-open" onClick={this.props.toggleDropdown}>
							<i className="fa fa-bars menu-burger" aria-hidden="true"></i>Menu<i className="fa fa-sort-asc arrow up-arrow" aria-hidden="true"></i>
						</button>
		} else {
			return <button className="menu-button" onClick={this.props.toggleDropdown}>
							<i className="fa fa-bars menu-burger" aria-hidden="true"></i>Menu<i className="fa fa-sort-desc arrow down-arrow" aria-hidden="true"></i>
						</button>
		}
	}

	render() {
		return (
			<div className="navigation-wrapper">
				<div className="navigation">
					<div className="content-wrapper">
						<div className="logo-search-wrapper">
							<Link to="/" className="logo">
								<img src="images/logopurple.png" />
							</Link>
							<form className="search-bar">
						    <input  id="search" placeholder="Search for a city, friend, non-profit or cause..." />
						    <button className="search-icon"><i className="fa fa-search"></i></button>
						  </form>
						</div>		
						<nav>
							<Link to="/login" className="login-link nav-link">
								Log in
							</Link>
							<Link to="/signup" className="signup-link nav-link">
								Sign up
							</Link> 
							{this.renderMenuButton()}
							{this.renderDropdown()}
						</nav>
					</div>	
				</div>
			</div>
		)
	}
}

// this is taking the navigation portion of state and attaching it to the Navigation's props
function mapStateToProps(state, routing) {
  return Object.assign({}, state.navigation, routing)
}

// this is attaching our actions to the Navigation component
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)