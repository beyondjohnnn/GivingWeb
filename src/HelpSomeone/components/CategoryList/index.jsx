import React from 'react'

import css from './CategoryList.scss'

class CategoryList extends React.Component {

	createCategories() {
    const categories = ['All', 'Art Supplies', 'Education',
		'Employment', 'other', 'other', 'other', 'other', 'other', 'other', 'other'];
		
		return categories.map((category, index) => {
			return <button className="category-buttons" key={index}>{category}</button>
		})
	}

	render() {
		return (
      <div className="category-list-container">
        {this.createCategories()}
      </div>

		)
	}
}

export default CategoryList
