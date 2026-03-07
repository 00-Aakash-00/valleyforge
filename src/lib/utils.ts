const USD_PRICE_FORMATTER = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 0,
	maximumFractionDigits: 2,
});

const NON_DIGIT_PATTERN = /\D/g;

export function cn(...classes: (string | boolean | undefined | null)[]): string {
	return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number): string {
	return USD_PRICE_FORMATTER.format(price);
}

export function formatPhone(phone: string): string {
	return phone.replace(NON_DIGIT_PATTERN, "");
}
