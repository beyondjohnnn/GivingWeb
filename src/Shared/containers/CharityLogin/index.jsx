import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actionCreators from '../../../actions/authActionCreators'

import css from './CharityLogin.scss'

class CharityLogin extends React.Component {

	componentWillReceiveProps(nextProps) {
		if (nextProps.charity) {
			this.props.history.push('/charity-dashboard')
		}
	}

	submitForm(e) {
		e.preventDefault()

		const loginDetails = {
			email: this.refs.email.value,
			password: this.refs.password.value
		}

		this.props.charityLogin(loginDetails)
	}

	render() {
		return (
			<div className="charity-login">
				<form onSubmit={this.submitForm.bind(this)} >
					<div className="form-header">
						<h2>Charity Log in</h2>
					</div>
					<div className="email-field-wrapper form-field">
						<label htmlFor="email">Email</label>
						<input ref="email" type="email" />
					</div>
					<div className="password-field-wrapper form-field">
						<label htmlFor="password">Password</label>
						<input ref="password" type="password" />
					</div>
					<input type="submit" value="Log in" />
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

export default connect(mapStateToProps, mapDispatchToProps)(CharityLogin)
