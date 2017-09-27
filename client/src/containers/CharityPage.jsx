import React from 'react'

import css from './CharityPage.scss'

class CharityPage extends React.Component {
	render() {
		return (
			<div className="charity-page">

				<section>

					<h2>Find someone to help</h2>
					<p>
						Support individuals and families who are experiencing poverty or
						homelessness in raising money for basic needs and goals. You can
						see first hand the positive impact of your donation when we send
						you updates from our member once they have reach their target!
					</p>
					<p>
						*Each member is verified by our trusted partner organisations and
						is receiving assistance towards long term stability.
					</p>

				</section>

				<section>

					<div className="location-filter-container">
						<span>
							All Areas
						</span>
						<i className="fa fa-long-arrow-down custom-arrow" aria-hidden="true"></i>
					</div>

				</section>

			</div>
		)
	}
}

export default CharityPage
