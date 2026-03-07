export interface Product {
	id: string;
	name: string;
	slug: string;
	price: number;
	category: ProductCategory;
	description: string;
	image: string;
	inStock: boolean;
}

export type ProductCategory =
	| "gun-cleaning"
	| "springs"
	| "pins"
	| "gun-screws"
	| "gunsmith-tools"
	| "ar-15-10"
	| "scar";

export interface CategoryInfo {
	slug: ProductCategory;
	name: string;
	description: string;
}

export interface Review {
	id: string;
	name: string;
	rating: number;
	text: string;
	source: "Google" | "Yelp";
	date: string;
}

export interface Service {
	id: string;
	name: string;
	slug: string;
	description: string;
	price: string;
	features: string[];
	image: string;
	cardImage?: string;
}

export interface CleaningService {
	id: string;
	name: string;
	badge: string;
	price: string;
	priceDetails?: string[];
	features: string[];
	description: string;
	image: string;
}

export interface ARService {
	name: string;
	price: string;
}

export interface CartItem {
	product: Product;
	quantity: number;
}

export interface BusinessHours {
	days: string;
	hours: string;
}

export interface BusinessInfo {
	name: string;
	phone: string;
	email: string;
	address: string;
	city: string;
	state: string;
	zip: string;
	location: string;
	googleRating: number;
	reviewCount: number;
	hours: BusinessHours;
	social: {
		instagram: string;
		facebook: string;
		yelp: string;
	};
	coordinates: {
		lat: number;
		lng: number;
	};
}
