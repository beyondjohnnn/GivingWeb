import axios from 'axios'

export function toggleDropdown() {
  return {
    type: 'TOGGLE_DROPDOWN'
  }
}

export function fuzzySearch(searchTerm, limit) {
	return {
		type: 'FUZZY_SEARCH',
		payload: axios.post(`${process.env.API_URL}/search`, {searchTerm, limit})
	}
}

export function clearSearch() {
	return {
		type: 'CLEAR_SEARCH'
	}
}

export function toggleSearchResultsVisibility() {
	return {
		type: 'TOGGLE_SEARCH_RESULTS_VISIBILITY'
	}
}

export function updateScrollPosition(scrollY) {
  return {
    type: 'UPDATE_SCROLL_POSITION',
    scrollPosition: scrollY
  }
}

export function updateNavigationStyling(className) {
  return {
    type: 'UPDATE_NAVIGATION_STYLING',
    navigationStyling: className
  }
}
