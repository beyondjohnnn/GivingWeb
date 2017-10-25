import React, {Component} from 'react'
import {Link} from 'react-router-dom'


import css from './SearchCharityPreview.scss'

class SearchCharityPreview extends Component {
	render() {
		return (
      <Link className="charity-link" to={`/charity-page`}>
        <div className="search-charity-preview">
          <div className="image-cover"> 
            <img src={this.props.logoUrl} alt=""/>
          </div>
          <div className="charity-preview-info">
            <h3>{this.props.charity.name}</h3>
            <h2></h2>
          </div>
        </div>
      </Link>
		)
	}
}

export default SearchCharityPreview