import React from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import css from './Navigation.scss'

class Navigation extends React.Component {
	render() {
		return (
			<div className="navigation">
				<h1 className="banner">
					GivingWeb
				</h1>
				<form>
					<input type="text"/>
				</form>
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
		)
	}
}

export default Navigation