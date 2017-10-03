import React from 'react'

import css from './CharityTile.scss'

class CharityTile extends React.Component {

	render() {
		return (
      <div className="charity-tile">
        <section className="tile-header">
          <img className="user-icon_img" src="http://via.placeholder.com/50x50" alt="user icon"/>
          <div>
            <h3>User Name</h3>
          </div>
        </section>
      </div>
		)
	}
}

export default CharityTile
