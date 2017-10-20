export function toggleSelect() {
	return {
		type: 'TOGGLE_DONATION_SELECT'
	}
}

export function setDonationAmount(donationAmount) {
	return {
		type: 'SET_DONATION_AMOUNT',
		donationAmount
	}
}

export function customDonation() {
	return {
		type: 'CUSTOM_DONATION'
	}
}

export function setCustomAmount(donationAmount) {
	return {
		type: 'SET_CUSTOM_AMOUNT',
		donationAmount
	}
}
