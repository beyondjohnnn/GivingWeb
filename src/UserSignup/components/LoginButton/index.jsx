import React, {Component} from 'react'
import { FacebookLogin } from 'react-facebook-login-component'
import FacebookProvider, {Login} from 'react-facebook'

import css from './LoginButton.scss'

class LoginButton extends Component {

	constructor (props, context) {
    super(props, context);
  }
 
  responseFacebook (response) {
    const details = {
      first_name: response.first_name,
      last_name: response.last_name,
      email: response.email,
      gender: response.gender,
      location: response.location.name,
      url_image: response.picture.data.url,
      fb_token: response.accessToken
    }
    console.log(details);
  }

	render() {
		return (
			<div className="login-button">
        <FacebookLogin socialId="184647528774656"
          language="en_US"
          scope="public_profile,email,user_location,user_birthday,user_photos"
          responseHandler={this.responseFacebook}
          xfbml={true}
          fields="id,email,first_name,last_name,picture,birthday,currency,gender,hometown,location,locale,family"
          version="v2.10"
          className="facebook-login"
          buttonText="Login With Facebook"/>
      </div>
    )
  }
}

export default LoginButton
        // <FacebookProvider appId="184647528774656">
        //   <Login
        //     scope="public_profile,user_location,user_birthday,user_photos"
        //     responseHandler={this.responseFacebook}
        //     xfbml={true}
        //     fields={['email','first_name','last_name','picture','birthday','currency','gender','hometown','location','locale','family']}
        //     version="v2.10"
        //     className="facebook-login">
        //     Login With Facebook
        //   </Login>
        // </FacebookProvider>