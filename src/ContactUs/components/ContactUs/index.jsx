import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import css from './ContactUs.scss'

class ContactUs extends React.Component {


	render() {
		return (
			<div className="contact-us">
        <div className="col-2">
          <form className="contact-form" action="https://streetchange.org.uk/contact-us/" method="post">
              <label className="field ">
                Name <input type="text" name="form_name" value="" placeholder="" />
                <span className="field__error"></span>
              </label>
              <label className="field ">
                Email    <input type="text" name="form_email" value="" placeholder="" />
                <span className="field__error"></span>
              </label>
              <label className="field ">
                Subject    <input type="text" name="form_subject" value="" placeholder="" />
                <span className="field__error"></span>
              </label>
                <input type="text" name="form_body" value="" placeholder="Body" />
                <input type="hidden" id="_wpnonce" name="_wpnonce" value="9b468b7808" />
                <input type="hidden" name="_wp_http_referer" value="/contact-us/" />
              <label className="field ">
                <span>Message</span>
                <textarea rows="3" name="form_message" placeholder=""></textarea>
                <span className="field__error"></span>
              </label>
              <button type="submit">Submit</button>
              </form>
          </div>
			</div>
		)
	}
}


export default ContactUs
