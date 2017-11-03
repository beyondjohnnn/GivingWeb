import axios from 'axios'

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

export function toggleSupport() {
	return {
		type: 'TOGGLE_DONATION_SUPPORT'
	}
}

export function toggleAnonymous() {
	return {
		type: 'TOGGLE_DONATION_ANONYMOUS'
	}
}

export function payWithToken(token, email, amount) {
	return {
		type: 'SUBMIT_PAYMENT',
		payload: axios.post(
			`${process.env.API_URL}/donations`, 
			{
				token: token, 
				email: email,
				donation_amount: amount * 100
			}
		)
	}
}