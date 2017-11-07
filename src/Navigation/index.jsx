import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import {connect}  from 'react-redux'

import * as actionCreators from '../actions/navActionCreators'

import css from './Navigation.scss'

import MenuDropdown from './components/MenuDropdown'
import SearchBar from './components/SearchBar'

class Navigation extends React.Component {

	constructor(props) {
	  super(props)
	  this.handleScroll = this.handleScroll.bind(this)
	}

	componentDidMount() {
	  window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
	  window.removeEventListener('scroll', this.handleScroll)
	}

	  // if (window.scrollY > 326) {
	handleScroll() {
		 if ((window.scrollY > 350) && (window.scrollY - this.props.scrollPosition > 50)) {
	   	this.props.updateScrollPosition(window.scrollY)
	   	if (this.props.navigationStyling =="navigation nav-visible") {
		 		this.props.updateNavigationStyling("navigation nav-hidden") 
		 	}
		 } else if(window.scrollY - this.props.scrollPosition < -50) {
	   	this.props.updateScrollPosition(window.scrollY) 
 	   	if (this.props.navigationStyling =="navigation nav-hidden") {
 		 		this.props.updateNavigationStyling("navigation nav-visible") 
 		 	}
		 }

	   
	}

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
							<i className="fa fa-bars menu-burger" aria-hidden="true"></i><span>Menu</span><i className="fa fa-sort-asc arrow up-arrow" aria-hidden="true"></i>
						</button>
		} else {
			return <button className="menu-button" onClick={this.props.toggleDropdown}>
							<i className="fa fa-bars menu-burger" aria-hidden="true"></i><span>Menu</span><i className="fa fa-sort-desc arrow down-arrow" aria-hidden="true"></i>
						</button>
		}
	}

	renderNavLinks() {
		if (this.props.location.pathname === "/charities") {
			return (
				<Link to="/charities-login" className="login-link nav-link">
					Log in
				</Link>
			)
		} else {
			return (
				<div>
					<Link to="/login" className="login-link nav-link">
						Log in
					</Link>
					<Link to="/signup" className="signup-link nav-link">
						Sign up
					</Link>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="navigation-wrapper">
				<div className={this.props.navigationStyling}>
					<div className="content-wrapper">
						<div className="logo-search-wrapper">
							<Link to="/" className="logo-text">
								<div className="logo-wrapper">
									<img src="images/streetchangelogopurpe.png" className="logo" />
									<p className="giving-text">Giving</p>
									<p className="web-text">Web</p>
								</div>
							</Link>
						</div>
						<SearchBar history={this.props.history}/>
						<nav>
							{this.renderNavLinks()}
							{this.renderMenuButton()}
							{this.renderDropdown()}
						</nav>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, routing) {
  return { ...state.navigation, ...routing }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
