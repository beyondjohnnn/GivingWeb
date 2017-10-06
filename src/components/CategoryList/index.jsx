import React from 'react'

import css from './CategoryList.scss'

import MemberPreview from '../MemberPreview'

class CategoryList extends React.Component {

	render() {

    let categories = ["All", "Art Supplies", "Education",
		"Employment", "other", "other", "other", "other", "other", "other", "other"];

		let categoryElements = [];
		for(let index in categories){
			categoryElements.push(<button className="category-buttons" key={index}>{categories[index]}</button>);
		}

		return (
      <div className="category-list-container">
        {categoryElements}
      </div>

		)
	}
}

export default CategoryList
