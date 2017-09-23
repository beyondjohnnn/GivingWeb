import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/authActionCreators'

import css from './UserSignup.scss'

class UserSignup extends React.Component {

	formSubmit(e) {
		e.preventDefault()

		const newUserDetails = {
			first_name: this.refs.first_name.value,
			last_name: this.refs.last_name.value,
			email: this.refs.email.value,
			password: this.refs.password.value
		}

		this.props.signup(newUserDetails)
	}


	render() {
		return (
			<div className="user-signup">
				<form ref="signup-form" action="/" method="post" onSubmit={this.formSubmit.bind(this)}>
					<div className="form-header">
						<h2>Sign up</h2>
					</div>
					<div className="email-field-wrapper form-field">
						<label htmlFor="email">Email</label>
						<input ref="email" id="email" name="email" type="email" />
					</div>
					<div className="name-field-wrapper form-field">
						<div>
							<label htmlFor="first_name">First name</label>
							<input ref="first_name" id="first_name" name="first_name" type="text" />
						</div>
						<div>
							<label htmlFor="last_name">Last name</label>
							<input ref="last_name" id="last_name" name="last_name" type="text" />
						</div>
					</div>
					<div className="password-field-wrapper form-field">
						<label htmlFor="password">Password</label>
						<input ref="password" id="password" name="password" type="password" />
					</div>
					<input type="submit" value="Sign up" />
					<div className="extra-info">
						Already have an account?
					</div>
				</form>


			</div>
		)
	}
}

function mapStateToProps(state, router) {
	return Object.assign({}, state.auth)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignup)