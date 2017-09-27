import React from 'react'
import MemberPreview from './../components/MemberPreview'

import css from './CategoryList.scss'

class CategoryList extends React.Component {

	render() {

    let categories = ["All", "Art Supplies", "Education",
		"Employment", "other", "other", "other", "other", "other", "other", "other"];

		let categoryElements = [];
		for(let index in categories){
			categoryElements.push(<li key={index}><button>{categories[index]}</button></li>);
		}

		return (
      <div className="category-list-container">
        <ul>{categoryElements}</ul>
      </div>

		)
	}
}

export default CategoryList
