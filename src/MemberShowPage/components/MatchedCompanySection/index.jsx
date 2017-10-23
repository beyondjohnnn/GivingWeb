import React, {Component} from 'react'

class MatchedCompanySection extends Component {
	render() {
		return (
			<div className="matched-section">
				<div className="matched-by-image-container">
					<img src="./images/matchedX2.png" />
				</div>
				<div className="matched-by-text-container">
					<p>Donations Matched By:</p>
					<img
						src={this.props.sponsor.sponsor_url_image}
						alt={`${this.props.sponsor.name} logo`} />
				</div>
			</div>
		)
	}
}

export default MatchedCompanySection
