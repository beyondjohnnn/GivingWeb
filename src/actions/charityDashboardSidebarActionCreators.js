export function setCurrentCharityDashboardSidebarTab(dropdownRef) {
  return {
    type: "SET_CURRENT_CHARITY_DASHBOARD_SIDEBAR_TAB",
    dropdownRef
  }
}

// needs to be pull into dashboard sidebar
// change to update instead of a create
export function getCharityFeaturedMembers(charity_id) {
	const id = charity_id.toString
	return {
		type: 'GET_CHARITY_FEATURED_MEMBERS',
		payload: axios.get('http://localhost:3000/charity_featured_members/'+ id)
	}
}
export function submitNewFeaturedMember(charity_id, member) {
  const id = member.toString
	return {
		type: 'SUBMIT_NEW_FEATURED_MEMBER',
		payload: axios.post('http://localhost:3000/charity_featured_members/'+ id, member)
	}
}
export function submitUpdateFeaturedMember(charity_id, member) {
  const id = member.toString
	return {
		type: 'SUBMIT_UPDATE_FEATURED_MEMBER',
		payload: axios.put('http://localhost:3000/charity_featured_members/'+ id, member)
	}
}
