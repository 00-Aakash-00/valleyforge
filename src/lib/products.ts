import type { CategoryInfo, Product } from "@/types";

export const CATEGORIES: CategoryInfo[] = [
	{
		slug: "gun-cleaning",
		name: "Gun Cleaning",
		description: "Professional cleaning supplies and solvents",
	},
	{
		slug: "springs",
		name: "Springs",
		description: "Replacement springs for all major firearms",
	},
	{
		slug: "pins",
		name: "Pins",
		description: "Replacement pins and pin kits",
	},
	{
		slug: "gun-screws",
		name: "Gun Screws",
		description: "Replacement screws and screw kits",
	},
	{
		slug: "gunsmith-tools",
		name: "Gunsmith Tools",
		description: "Professional gunsmithing tools and accessories",
	},
	{
		slug: "ar-15-10",
		name: "AR-15/10",
		description: "AR-15 and AR-10 parts and accessories",
	},
	{
		slug: "scar",
		name: "SCAR",
		description: "FN SCAR parts and accessories",
	},
];

export const PRODUCTS: Product[] = [
	{
		id: "1",
		name: "CLP Cleaner Lubricant Protectant",
		slug: "clp-cleaner-lubricant-protectant",
		price: 12.99,
		category: "gun-cleaning",
		description:
			"All-in-one cleaner, lubricant, and protectant. Perfect for field cleaning and regular maintenance. Trusted by military and law enforcement.",
		image: "/images/shop/clp-cleaner.jpg",
		inStock: true,
	},
	{
		id: "2",
		name: "Bore Snake 9mm",
		slug: "bore-snake-9mm",
		price: 14.99,
		category: "gun-cleaning",
		description:
			"Quick and easy bore cleaning in one pull. Designed for 9mm/.357/.380 caliber handguns.",
		image: "/images/shop/bore-snake-9mm.jpg",
		inStock: true,
	},
	{
		id: "3",
		name: "Bore Snake .223/5.56",
		slug: "bore-snake-223",
		price: 14.99,
		category: "gun-cleaning",
		description:
			"Quick bore cleaning for .223/5.56 rifles. One-pass cleaning with built-in bronze brush.",
		image: "/images/shop/bore-snake-223.jpg",
		inStock: true,
	},
	{
		id: "4",
		name: "Gun Cleaning Mat",
		slug: "gun-cleaning-mat",
		price: 19.99,
		category: "gun-cleaning",
		description:
			"Padded cleaning mat with parts diagram. Oil-resistant surface protects your workspace.",
		image: "/images/shop/cleaning-mat.jpg",
		inStock: true,
	},
	{
		id: "5",
		name: "Cleaning Brush Set",
		slug: "cleaning-brush-set",
		price: 9.99,
		category: "gun-cleaning",
		description:
			"Set of nylon, bronze, and stainless steel brushes for detailed cleaning of all firearm components.",
		image: "/images/shop/brush-set.jpg",
		inStock: true,
	},
	{
		id: "6",
		name: "Glock Recoil Spring Assembly",
		slug: "glock-recoil-spring-assembly",
		price: 24.99,
		category: "springs",
		description: "OEM-spec recoil spring assembly for Glock 17/19/26. Drop-in replacement.",
		image: "/images/shop/glock-recoil-spring.jpg",
		inStock: true,
	},
	{
		id: "7",
		name: "AR-15 Buffer Spring",
		slug: "ar-15-buffer-spring",
		price: 8.99,
		category: "springs",
		description:
			"Mil-spec carbine buffer spring for AR-15 platforms. Chrome silicon wire for long life.",
		image: "/images/shop/ar-buffer-spring.jpg",
		inStock: true,
	},
	{
		id: "8",
		name: "1911 Recoil Spring Kit",
		slug: "1911-recoil-spring-kit",
		price: 14.99,
		category: "springs",
		description: "Complete recoil spring kit for 1911 pistols. Includes guide rod and spring.",
		image: "/images/shop/1911-spring-kit.jpg",
		inStock: true,
	},
	{
		id: "9",
		name: "Striker Spring Kit",
		slug: "striker-spring-kit",
		price: 12.99,
		category: "springs",
		description:
			"Replacement striker/firing pin spring kit. Compatible with most striker-fired pistols.",
		image: "/images/shop/striker-spring.jpg",
		inStock: true,
	},
	{
		id: "10",
		name: "AR-15 Takedown Pin Set",
		slug: "ar-15-takedown-pin-set",
		price: 9.99,
		category: "pins",
		description:
			"Front and rear takedown pins for AR-15 lower receivers. Mil-spec steel with detent springs.",
		image: "/images/shop/ar-takedown-pins.jpg",
		inStock: true,
	},
	{
		id: "11",
		name: "Glock Pin Kit",
		slug: "glock-pin-kit",
		price: 14.99,
		category: "pins",
		description:
			"Complete pin set for Glock pistols. Includes trigger pin, locking block pin, and trigger housing pin.",
		image: "/images/shop/glock-pin-kit.jpg",
		inStock: true,
	},
	{
		id: "12",
		name: "Roll Pin Assortment",
		slug: "roll-pin-assortment",
		price: 11.99,
		category: "pins",
		description:
			"Assortment of roll pins in common firearm sizes. Essential for any gun owner's parts kit.",
		image: "/images/shop/roll-pin-set.jpg",
		inStock: true,
	},
	{
		id: "13",
		name: "Grip Screw Kit - 1911",
		slug: "grip-screw-kit-1911",
		price: 8.99,
		category: "gun-screws",
		description:
			"Stainless steel grip screws and bushings for 1911 pistols. Set of 4 screws with bushings.",
		image: "/images/shop/1911-grip-screws.jpg",
		inStock: true,
	},
	{
		id: "14",
		name: "Scope Ring Screws",
		slug: "scope-ring-screws",
		price: 6.99,
		category: "gun-screws",
		description: "Replacement scope ring and base screws. Torx head for secure fastening.",
		image: "/images/shop/scope-screws.jpg",
		inStock: true,
	},
	{
		id: "15",
		name: "Sight Screw Set",
		slug: "sight-screw-set",
		price: 7.99,
		category: "gun-screws",
		description:
			"Assorted sight screws for common handgun and rifle sights. Multiple thread pitches included.",
		image: "/images/shop/sight-screws.jpg",
		inStock: true,
	},
	{
		id: "16",
		name: "Punch Set - Gunsmith Grade",
		slug: "punch-set-gunsmith",
		price: 29.99,
		category: "gunsmith-tools",
		description:
			"Professional gunsmith punch set with roll pin punches, starter punches, and pin punches in a case.",
		image: "/images/shop/punch-set.jpg",
		inStock: true,
	},
	{
		id: "17",
		name: "Armorer's Wrench - AR-15",
		slug: "armorers-wrench-ar15",
		price: 34.99,
		category: "gunsmith-tools",
		description:
			"Multi-function armorer's wrench for AR-15. Castle nut, barrel nut, muzzle device, and free-float handguard tool.",
		image: "/images/shop/armorers-wrench.jpg",
		inStock: true,
	},
	{
		id: "18",
		name: "Torque Wrench - Inch Pounds",
		slug: "torque-wrench-inch-pounds",
		price: 44.99,
		category: "gunsmith-tools",
		description:
			"Precision torque wrench calibrated in inch-pounds. Essential for scope mounting and barrel nut installation.",
		image: "/images/shop/torque-wrench.jpg",
		inStock: true,
	},
	{
		id: "19",
		name: "AR-15 Lower Parts Kit",
		slug: "ar-15-lower-parts-kit",
		price: 49.99,
		category: "ar-15-10",
		description:
			"Complete lower parts kit for AR-15 builds. Includes trigger group, safety selector, magazine catch, bolt catch, and all pins and springs.",
		image: "/images/shop/ar-lpk.jpg",
		inStock: true,
	},
	{
		id: "20",
		name: "AR-15 Upper Parts Kit",
		slug: "ar-15-upper-parts-kit",
		price: 19.99,
		category: "ar-15-10",
		description:
			"Upper receiver parts kit including forward assist, dust cover, and all related springs and pins.",
		image: "/images/shop/ar-upk.jpg",
		inStock: true,
	},
	{
		id: "21",
		name: "AR-15 Charging Handle",
		slug: "ar-15-charging-handle",
		price: 24.99,
		category: "ar-15-10",
		description:
			"Mil-spec charging handle for AR-15/M4 platforms. 7075-T6 aluminum with standard latch.",
		image: "/images/shop/ar-charging-handle.jpg",
		inStock: true,
	},
	{
		id: "22",
		name: "AR-15 Gas Block .750",
		slug: "ar-15-gas-block",
		price: 29.99,
		category: "ar-15-10",
		description:
			"Low profile gas block for .750 diameter barrels. Steel construction with set screw attachment.",
		image: "/images/shop/ar-gas-block.jpg",
		inStock: true,
	},
	{
		id: "23",
		name: "AR-15 Buffer Kit",
		slug: "ar-15-buffer-kit",
		price: 34.99,
		category: "ar-15-10",
		description:
			"Complete carbine buffer kit. Includes buffer tube, buffer, spring, end plate, and castle nut.",
		image: "/images/shop/ar-buffer-kit.jpg",
		inStock: true,
	},
	{
		id: "24",
		name: "AR-15 Bolt Carrier Group",
		slug: "ar-15-bcg",
		price: 89.99,
		category: "ar-15-10",
		description:
			"Complete M16/AR-15 bolt carrier group. Carpenter 158 bolt, MPI tested, phosphate finish.",
		image: "/images/shop/ar-bcg.jpg",
		inStock: true,
	},
	{
		id: "25",
		name: "SCAR 17 Recoil Spring",
		slug: "scar-17-recoil-spring",
		price: 29.99,
		category: "scar",
		description: "Replacement recoil spring for FN SCAR 17S. OEM-spec for reliable function.",
		image: "/images/shop/scar-recoil-spring.jpg",
		inStock: true,
	},
	{
		id: "26",
		name: "SCAR Charging Handle",
		slug: "scar-charging-handle",
		price: 49.99,
		category: "scar",
		description:
			"Extended charging handle for FN SCAR 16/17. Ambidextrous design with enhanced grip.",
		image: "/images/shop/scar-charging-handle.jpg",
		inStock: true,
	},
	{
		id: "27",
		name: "SCAR Trigger Spring Kit",
		slug: "scar-trigger-spring-kit",
		price: 19.99,
		category: "scar",
		description:
			"Replacement trigger and hammer spring kit for FN SCAR platforms. Reduces trigger pull weight.",
		image: "/images/shop/scar-trigger-spring.jpg",
		inStock: true,
	},
];

export function getProductsByCategory(category: string): Product[] {
	return PRODUCTS.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
	return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
	return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(
		0,
		limit,
	);
}
