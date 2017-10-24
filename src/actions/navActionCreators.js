import axios from 'axios'

export function toggleDropdown() {
  return {
    type: 'TOGGLE_DROPDOWN'
  }
}

export function fuzzySearch(searchTerms) {
	return {
		type: 'FUZZY_SEARCH',
		payload: axios.post('http://localhost:3000/search', searchTerms)
	}
}

export function clearSearch() {
	return {
		type: 'CLEAR_SEARCH'
	}
}