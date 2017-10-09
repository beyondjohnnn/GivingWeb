import { calcTotalDonations, calcDonationPercentage, getDonationBarColour } from './../../utils/donations'

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
		let result = calcDonationPercentage(member)
		let expected = 41

		member.donations.push({total: 0.125})
		result = calcDonationPercentage(member)
		expect(result).toBe(expected)

		member.donations.pop()

		member.donations.push({total: 0.25})
		result = calcDonationPercentage(member)
		expect(result).toBe(expected)

		member.donations.pop()

		member.donations.push({total: 0.375})
		result = calcDonationPercentage(member)
		expect(result).toBe(expected)
	})
})
