import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/authActionCreators'

class UserLogin extends React.Component {

	submitForm(e) {
		e.preventDefault

		const loginDetails = {
			email: this.refs.email,
			password: this.refs.password
		}

		this.props.login(loginDetails)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm.bind(this)} >
					<h2>Log in</h2>
					<div>
						<label htmlFor="email">Email</label>
						<input ref="email" type="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input ref="password" type="password" />
					</div>
					<input type="submit" value="Log in" />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)