import type { ARService, CleaningService, Service } from "@/types";

export const CLEANING_SERVICES: CleaningService[] = [
	{
		id: "basic-cleaning",
		name: "Basic Cleaning",
		badge: "QUICK TURNAROUND",
		price: "$25",
		features: [
			"Field strip",
			"Basic cleaning of all components",
			"Oil & lubrication",
			"Function check",
		],
		description:
			"Our basic cleaning service includes a field strip, thorough cleaning of all accessible components, proper lubrication, and a function check. Perfect for regular maintenance after range days.",
		image: "/images/services/basic-cleaning.jpeg",
	},
	{
		id: "pro-cleaning",
		name: "Pro Cleaning",
		badge: "DEEP CLEAN",
		price: "From $50",
		priceDetails: ["Handgun — $50", "Rifle / Shotgun — $75"],
		features: [
			"Complete disassembly",
			"Ultrasonic cleaning",
			"Deep cleaning of all parts",
			"Detailed inspection",
			"Oil & lubrication",
			"Function check",
		],
		description:
			"Our Pro Cleaning goes beyond a basic field strip. We completely disassemble your firearm and use ultrasonic cleaning technology to remove carbon buildup, grime, and residue from every component. Includes a thorough inspection for wear or damage.",
		image: "/images/services/pro-cleaning.png",
	},
];

export const OTHER_SERVICES: Service[] = [
	{
		id: "sight-installation",
		name: "Sight Installation",
		slug: "sight-installation",
		description:
			"Professional sight installation using our Sight-Pro universal sight pusher. Dovetail sights, red dot/optic mounting, and laser boresight included.",
		price: "$40",
		features: [
			"Dovetail sight installation",
			"Red dot / optic mounting",
			"Laser boresight included",
			"Sight-Pro universal sight pusher",
		],
		image: "/images/services/sight-installation.png",
	},
	{
		id: "scope-mounting",
		name: "Scope / Optic Mounting",
		slug: "scope-mounting",
		description:
			"Expert scope and optic mounting with precision leveling, proper torque specifications, and laser boresight.",
		price: "$50",
		features: [
			"Precision leveling",
			"Proper torque specifications",
			"Laser boresight included",
			"Ring and base installation",
		],
		image: "/images/services/scope-mounting.jpeg",
	},
	{
		id: "trigger-kits",
		name: "Trigger Kits",
		slug: "trigger-kits",
		description:
			"Professional trigger kit installation. Now offering APEX Tactical Triggers. Price includes installation labor — customer supplies trigger kit or purchase through us.",
		price: "From $50",
		features: [
			"Trigger kit installation",
			"APEX Tactical Triggers available",
			"Handgun triggers — $50",
			"Rifle triggers — $75",
			"Function and safety check",
		],
		image: "/images/services/trigger-kits.jpeg",
	},
	{
		id: "ar-services",
		name: "AR Services",
		slug: "ar-services",
		description:
			"Complete AR-15 and AR-10 services from our Army-trained gunsmith. Builds, repairs, barrel swaps, and gas system work.",
		price: "From $40",
		features: [
			"Upper & lower receiver builds",
			"Barrel installation & swaps",
			"Gas block & tube installation",
			"Handguard installation",
			"Muzzle device installation",
		],
		image: "/images/services/ar-services.jpeg",
	},
	{
		id: "cerakote",
		name: "Cerakote",
		slug: "cerakote",
		description:
			"100+ colors available through our partner Lawless Coatings. Solid colors, camouflage patterns, battleworn finishes, and custom designs.",
		price: "Contact for Quote",
		features: [
			"100+ colors available",
			"Camouflage patterns",
			"Battleworn finishes",
			"Custom designs",
			"Partner: Lawless Coatings",
		],
		image: "/images/services/cerakote.jpeg",
	},
];

export const AR_PRICING: ARService[] = [
	{ name: "Barrel Install / Swap", price: "$75" },
	{ name: "Upper Build (w/ customer parts)", price: "$100" },
	{ name: "Lower Build (w/ customer parts)", price: "$75" },
	{ name: "Full Build (w/ customer parts)", price: "$125" },
	{ name: "Gas Block & Tube Install", price: "$50" },
	{ name: "Handguard Install", price: "$50" },
	{ name: "Muzzle Device Install", price: "$40" },
	{ name: "Stock / Brace Install", price: "$40" },
	{ name: "Trigger Install (AR)", price: "$75" },
	{ name: "Complete Diagnostic & Repair", price: "$50/30min" },
];

export const MAINTENANCE_INFO = {
	shopRate: "$50/30min",
	minimum: "$25",
	description:
		"Minor repairs only on modern firearms (Glock, SIG Sauer, HK). Focus on replacing broken parts — NOT custom work, machining, or drilling.",
	services: [
		"Spring replacements",
		"Pin replacements",
		"Extractor replacement",
		"Firing pin replacement",
		"Magazine release replacement",
		"Slide lock / release replacement",
	],
};
