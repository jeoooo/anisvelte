export class DateFormatter {
	static formatDate(dateString: string | null | undefined): string {
		if (!dateString) return '???';

		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
		const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);

		return formattedDate;
	}
}
