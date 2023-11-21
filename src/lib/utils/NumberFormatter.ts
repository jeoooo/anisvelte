export class NumberFormatter {
	static formatWithCommas(number: number) {
		return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}
}
