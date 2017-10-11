import { calcTotalDonations, calcDonationPercentage, getDonationBarColour } from './donations'

let member
function defaultMember(){
	return {
		goal: 50,
		donations: [
			{total: 2},
			{total: 7},
			{total: 3},
			{total: 8},
		],
		comments: [],
		info: '',
		name: 'Charlie'
	}
}

describe('calcTotalDonations', () => {

	beforeEach(() => {
		member = defaultMember()
	});

	it('should be able to calculate the total donations of a member', () => {
		const result = calcTotalDonations(member)
		const expected = 20
		expect(result).toBe(expected)
	})

	it('should return the value of the goal if donations exceed it', () => {
		for(let j=0; j<5; j++){
			member.donations.push({total: 9})
		}

		const result = calcTotalDonations(member)
		const expected = 50
		expect(result).toBe(expected)
	})
})

describe('calcDonationPercentage', () => {

	beforeEach(() => {
		member = defaultMember()
	});

	it('should be able to calculate the donation of a member', () => {
		const result = calcDonationPercentage(member)
		const expected = 40
		expect(result).toBe(expected)
	})

	it('should always round up if donation percentage is less than 99', () => {
		let result
		let expected

		member.donations = []

		let currentPercent = 0
		for(let j=0; j<196; j++){
			currentPercent += 0.25
			member.donations.push({total: 0.125})

			result = calcDonationPercentage(member)
			expected = Math.ceil(currentPercent)

			expect(result).toBe(expected)
		}

	})

	it('should return 100 if donations exceed 100%', () => {
		for(let j=0; j<3; j++){
			member.donations.push({total: 10})
		}

		for(let j=0; j<100; j++){
			member.donations.push({total: 25.375})
			let result = calcDonationPercentage(member)
			let expected = 100
			expect(result).toBe(expected)
		}
	})
})

describe('getDonationBarColour', () => {

	beforeEach(() => {
		member = defaultMember()
	});

	it('should return #FBAC3D at a donationPercent of less than 50', () => {
		for(let j=0; j<50; j++){
			let result = getDonationBarColour(j)
			expect(result).toBe("#FBAC3D")
		}
	})

	it('should return #00CB9B at a donationPercent greater than or equal to 50', () => {
		for(let j=50; j<101; j++){
			let result = getDonationBarColour(j)
			expect(result).toBe("#00CB9B")
		}
	})

})
