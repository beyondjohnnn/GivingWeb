import React, {Component} from 'react'
import { FacebookLogin } from 'react-facebook-login-component'

import css from './LoginButton.scss'

class LoginButton extends Component {

	constructor (props, context) {
    super(props, context);
  }
 
  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

	render() {
		return (
			<div className="login-button">
				<FacebookLogin socialId="184647528774656"
          language="en_US"
          scope="public_profile,email,user_location,user_birthday,user_photos"
          responseHandler={this.responseFacebook}
          xfbml={true}
          fields="id,email,first_name,last_name,picture,age_range,birthday,currency,gender,hometown,location,locale,family"
          version="v2.10"
          className="facebook-login"
          buttonText="Login With Facebook"/>
			</div>
		)
	}
}

export default LoginButton