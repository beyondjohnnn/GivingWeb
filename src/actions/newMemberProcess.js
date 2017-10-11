export function setCurrentTab(tab) {
	return {
		type: 'SET_CURRENT_NEW_MEMBER_TAB',
		tab
	}
}

export function readFile(file, result) {
	return {
		type: 'CHANGE_IMAGE',
		file: file,
		imagePreviewUrl: result
	}
}