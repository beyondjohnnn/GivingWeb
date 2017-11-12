import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/fundraisingModalActionCreators'
import { bindActionCreators } from 'redux'


import css from './CharityPage.scss'

import CharityTile from './components/CharityTile'
import CareButton from './components/CareButton'

import CharityFeaturedMembers from './components/CharityFeaturedMembers'
import CharityPageInformation from './components/CharityPageInformation'
import CharityPageHero from './components/CharityPageHero'
import StartFundraisingModal from '../Shared/components/StartFundraisingModal'





class CharityPage extends React.Component {

	renderModal() {
		if(this.props.fundraisingModalVisible) {
			return <StartFundraisingModal />
		}
	}


	render() {
		return (
			<div className="charity-page">
				<div className="main-charity-wrapper">
					<CharityPageHero />
					<CharityPageInformation />
					<CharityFeaturedMembers />

					{this.renderModal()}
				</div>
			</div>

		)
	}
}

function mapStateToProps(state, routing) {
  return Object.assign({}, state.fundraisingModal, routing)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharityPage)

