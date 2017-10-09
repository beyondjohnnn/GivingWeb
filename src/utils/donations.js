export function calcTotalDonations(member) {
	const donations = member.donations.map((donation) => {
		return donation.total
	}).reduce((a, b) => {
		return a + b
	}, 0)

	return donations > member.goal ? member.goal : donations
}

export function calcDonationPercentage(member){
	const donations = calcTotalDonations(member)
	let donationPercent = (donations / member.goal) * 100;
	if(donationPercent >= 100) return 100;
	if(donationPercent < 99) return Math.ceil(donationPercent);
	else return 99;
}

export function getDonationBarColour(percentage){
	if(percentage < 50) return "#FBAC3D";
	else if(percentage >= 50) return "#00CB9B";
}
