import { CheckCircle, Droplets, MapPin, Phone } from "lucide-react";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { CLEANING_REVIEWS } from "@/lib/reviews";
import { CLEANING_SERVICES } from "@/lib/services";
import { formatPhone } from "@/lib/utils";

export const metadata = createMetadata({
	title: "Professional Firearm Cleaning",
	description:
		"Basic cleaning $25 any firearm. Pro deep cleaning from $50. Ultrasonic cleaning technology. Quick turnaround at C2 Tactical, Scottsdale AZ.",
	path: "/cleaning-services",
	keywords: [
		"gun cleaning",
		"ultrasonic cleaning",
		"firearm cleaning service",
		"basic gun cleaning",
		"deep clean",
	],
});

export default function CleaningServicesPage() {
	const basic = CLEANING_SERVICES[0];
	const pro = CLEANING_SERVICES[1];

	return (
		<>
			<ServiceHero title="Professional Firearm Cleaning" tagline="Keep it clean. Keep it ready." />

			{/* Ultrasonic Cleaning */}
			<ScrollReveal>
				<section className="bg-white py-20 md:py-28">
					<Container>
						<SectionHeading
							overline="OUR TECHNOLOGY"
							title="Ultrasonic Cleaning"
							description="We use professional ultrasonic cleaning technology to deliver results that hand cleaning simply can't match."
						/>
						<div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
							<div className="rounded-lg bg-white-warm p-6">
								<Droplets className="mb-4 h-8 w-8 text-vfw-navy-700" />
								<h3 className="font-heading text-lg font-bold text-black">How It Works</h3>
								<p className="mt-2 leading-relaxed text-slate-700">
									Ultrasonic cleaning uses high-frequency sound waves to create microscopic
									cavitation bubbles in a cleaning solution. These bubbles implode on contact with
									surfaces, removing carbon buildup, grime, and residue from every component —
									including areas that are impossible to reach by hand.
								</p>
							</div>
							<div className="rounded-lg bg-white-warm p-6">
								<CheckCircle className="mb-4 h-8 w-8 text-success" />
								<h3 className="font-heading text-lg font-bold text-black">Benefits</h3>
								<ul className="mt-2 space-y-2 text-slate-700">
									<li>Reaches areas hand cleaning can&apos;t</li>
									<li>Removes stubborn carbon and copper fouling</li>
									<li>Won&apos;t damage finishes or components</li>
									<li>Consistent, thorough results every time</li>
									<li>Safe for all modern firearms</li>
								</ul>
							</div>
						</div>
					</Container>
				</section>
			</ScrollReveal>

			{/* Basic Cleaning */}
			<ScrollReveal>
				<section className="bg-white-warm py-20 md:py-28">
					<Container>
						<div className="grid items-center gap-12 lg:grid-cols-2">
							<div className="aspect-[4/3] rounded-lg bg-gray-200" />
							<div>
								<Badge variant="navy">{basic.badge}</Badge>
								<h2 className="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">
									{basic.name}
								</h2>
								<p className="mt-2 text-4xl font-bold text-vfw-red-600">
									{basic.price}
									<span className="ml-2 text-lg font-normal text-slate-500">Any Firearm</span>
								</p>
								<p className="mt-4 text-lg leading-relaxed text-slate-700">{basic.description}</p>
								<ul className="mt-6 space-y-3">
									{basic.features.map((f) => (
										<li key={f} className="flex items-center gap-3">
											<CheckCircle className="h-5 w-5 shrink-0 text-success" />
											<span className="text-slate-700">{f}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</Container>
				</section>
			</ScrollReveal>

			{/* Pro Cleaning */}
			<ScrollReveal>
				<section className="bg-white py-20 md:py-28">
					<Container>
						<div className="grid items-center gap-12 lg:grid-cols-2">
							<div className="order-2 lg:order-1">
								<Badge variant="red">{pro.badge}</Badge>
								<h2 className="mt-4 font-heading text-3xl font-bold text-black md:text-4xl">
									{pro.name}
								</h2>
								<p className="mt-2 text-4xl font-bold text-vfw-red-600">{pro.price}</p>
								{pro.priceDetails && (
									<div className="mt-2 space-y-1">
										{pro.priceDetails.map((d) => (
											<p key={d} className="text-slate-500">
												{d}
											</p>
										))}
									</div>
								)}
								<p className="mt-4 text-lg leading-relaxed text-slate-700">{pro.description}</p>
								<ul className="mt-6 space-y-3">
									{pro.features.map((f) => (
										<li key={f} className="flex items-center gap-3">
											<CheckCircle className="h-5 w-5 shrink-0 text-success" />
											<span className="text-slate-700">{f}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="order-1 aspect-[4/3] rounded-lg bg-gray-200 lg:order-2" />
						</div>
					</Container>
				</section>
			</ScrollReveal>

			{/* When to Clean */}
			<ScrollReveal>
				<section className="bg-white-warm py-20 md:py-28">
					<Container>
						<SectionHeading overline="FIREARM CARE" title="When Should You Clean Your Firearm?" />
						<div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
							{[
								{
									title: "After Every Range Day",
									text: "Manufacturers recommend cleaning your firearm after every use. Carbon and fouling build up with each round fired.",
								},
								{
									title: "Every 500-1,000 Rounds",
									text: "At minimum, a thorough cleaning every 500-1,000 rounds keeps your firearm functioning reliably and prevents excessive wear.",
								},
								{
									title: "Before Long-Term Storage",
									text: "Always clean and properly lubricate your firearm before storing. This prevents rust, corrosion, and degradation of components.",
								},
							].map((item) => (
								<div key={item.title} className="rounded-lg bg-white p-6 shadow-sm">
									<h3 className="font-heading text-lg font-bold text-black">{item.title}</h3>
									<p className="mt-2 text-sm leading-relaxed text-slate-700">{item.text}</p>
								</div>
							))}
						</div>
					</Container>
				</section>
			</ScrollReveal>

			{/* Reviews */}
			<ScrollReveal>
				<section className="bg-white py-20 md:py-28">
					<Container>
						<SectionHeading overline="CUSTOMER REVIEWS" title="What Our Cleaning Customers Say" />
						<div className="grid gap-6 md:grid-cols-3">
							{CLEANING_REVIEWS.map((review) => (
								<ReviewCard key={review.id} review={review} />
							))}
						</div>
					</Container>
				</section>
			</ScrollReveal>

			{/* Bottom CTA */}
			<section className="bg-vfw-navy-900 py-16 md:py-20">
				<Container className="text-center">
					<h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
						Ready for a Clean Firearm?
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
						Drop off your firearm at our shop inside C2 Tactical. Quick turnaround, fair prices.
					</p>
					<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href={`tel:${formatPhone(BUSINESS.phone)}`}
							className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700"
						>
							<Phone className="h-5 w-5" />
							Call {BUSINESS.phone}
						</a>
						<a
							href="https://maps.google.com"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex min-h-[48px] items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/60 hover:bg-white/10"
						>
							<MapPin className="h-5 w-5" />
							Get Directions
						</a>
					</div>
				</Container>
			</section>
		</>
	);
}
