import { ShopContent } from "@/components/shop/ShopContent";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
	title: "Revolutionary Shop",
	description:
		"Shop gun cleaning supplies, firearm parts, springs, pins, screws, and gunsmith tools. Veteran-owned in Phoenix, AZ. The right parts for the right price.",
	path: "/shop",
	keywords: [
		"gun cleaning supplies Phoenix",
		"firearm parts Arizona",
		"AR-15 parts",
		"gun springs",
		"gunsmith tools",
		"SCAR parts",
		"firearm pins",
		"gun screws",
	],
});

export default function ShopPage() {
	return (
		<>
			{/* Hero */}
			<section className="bg-vfw-navy-900 pt-28 pb-16 sm:pt-32 sm:pb-20">
				<Container>
					<div className="text-center">
						<p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
							Valley Forge Weaponry
						</p>
						<h1 className="font-heading text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
							Revolutionary Shop
						</h1>
						<p className="mx-auto mt-4 max-w-xl text-base text-white/80 sm:text-lg">
							The Right Parts for the Right Price
						</p>
					</div>
				</Container>
			</section>

			{/* Products */}
			<section className="bg-white-warm py-14 sm:py-16">
				<Container>
					<ShopContent />
				</Container>
			</section>

			{/* SEO content */}
			<section className="border-t border-gray-200 bg-white py-14 sm:py-16">
				<Container>
					<div className="mx-auto max-w-3xl">
						<h2 className="font-heading mb-4 text-2xl font-bold text-charcoal">
							Gun Cleaning Supplies and Firearm Parts in Phoenix, Arizona
						</h2>
						<p className="text-base leading-relaxed text-slate-700">
							Valley Forge Weaponry is your trusted source for gun cleaning supplies in Phoenix and
							firearm parts in Arizona. Whether you need AR-15 lower parts kits, replacement springs
							for your Glock, SCAR accessories, or professional gunsmith tools, we carry the parts
							that keep your firearms running reliably. Located inside C2 Tactical in North Phoenix,
							our veteran-owned shop offers competitive pricing on everything from bore snakes and
							CLP to complete bolt carrier groups and buffer kits. Stop by Thursday through Saturday
							or browse our selection online. We proudly serve the Phoenix, Scottsdale, Tempe, Mesa,
							and greater Maricopa County firearms community.
						</p>
					</div>
				</Container>
			</section>
		</>
	);
}
