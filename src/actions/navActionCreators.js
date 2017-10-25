import axios from 'axios'

export function toggleDropdown() {
  return {
    type: 'TOGGLE_DROPDOWN'
  }
}

export function fuzzySearch(searchTerm) {
	return {
		type: 'FUZZY_SEARCH',
		payload: axios.post('http://localhost:3000/search', {searchTerm})
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