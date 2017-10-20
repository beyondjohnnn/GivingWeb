import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import css from './Header.scss'

class Header extends Component {
	render() {
		return (
			<div className="member-header">
				<h2>{this.props.snippet}</h2>
				<h3><i className="fa fa-check-circle-o" />Verified by <Link to="/charity-page" className="verified-charity-link">Streetwork</Link></h3>
			</div>
		)
	}
}

export default Header
