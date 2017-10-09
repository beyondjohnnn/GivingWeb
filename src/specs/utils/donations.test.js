import { calcTotalDonations, calcDonationPercentage, getDonationBarColour } from './../../utils/donations'

describe('donation functions', () => {
	let member

	beforeEach(() => {
		member = {
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
