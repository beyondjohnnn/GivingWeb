import React from 'react'

import css from './DonateMonthly.scss'


class DonateMonthly extends React.Component {



	render() {
		return (
			<div className="donate-monthly">
				<h3>Give Monthly</h3>
				<p>This is an amazing way to support our members who are raising funds for basic needs.</p>
				<p>We'll distribute this on your behalf and keep you posted with the impact of your kind support.</p>
				<form>
					<div className="soflow">
						<select name="amount"> 
							<option value="£10">£10pm</option>
							<option value="£20">£20pm</option>
							<option value="£30">£30pm</option>
							<option value="£50">£50pm</option>
							<option value="£100">£100pm</option>
						</select>  
					</div>
					<button>Pledge It!</button>
				</form> 


			</div>
		)
	}
}


export default DonateMonthly
