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
						<img src="images/givingwebgreypink.png"/>
						<form className="search-bar">
					    <input  id="search" placeholder="Search for a city, friend, non-profit or cause..." />
					    <button className="search-icon"><i className="fa fa-search"></i></button>
					  </form>
					</div>		
					<nav>
						<Link to="/login" className="login-link">
							Login
						</Link>
						<Link to="/signup" className="signup-link">
							Signup
						</Link>
						<button>Menu</button>
					</nav>
				</div>	
			</div>
		)
	}
}

export default Navigation