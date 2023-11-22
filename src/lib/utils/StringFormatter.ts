export class StringFormatter {
	static formatItems(studios: { name: string }[]): string {
		return studios.map((studio) => studio.name).join(', ');
	}
	static arrayformatItems(items: { type: string; title: string }[]): string {
		return items.map((item) => item.title).join('\n');
	}
}
