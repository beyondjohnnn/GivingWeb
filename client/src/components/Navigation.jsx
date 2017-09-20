import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import css from './Navigation.scss'

class Navigation extends React.Component {
	render() {
		return (
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
						<button className="menu-button">
							<i className="fa fa-bars menu-burger" aria-hidden="true"></i>Menu<i className="fa fa-sort-desc down-arrow" aria-hidden="true"></i>
						</button>
					</nav>
				</div>	
			</div>
		)
	}
}

export default Navigation