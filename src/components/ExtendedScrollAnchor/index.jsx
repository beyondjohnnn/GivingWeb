import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

class ExtendedScrollAnchor extends React.Component {
	render() {
		console.log("log: ", this.props.anchor);
		return (
			<ScrollableAnchor id={this.props.anchor}>
				<div className="scroll-anchor-wrapper">
	          {this.props.children}
	      </div>
			</ScrollableAnchor>
		)
	}
}

export default ExtendedScrollAnchor
