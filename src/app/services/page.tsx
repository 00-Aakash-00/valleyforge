import { AlertTriangle, CheckCircle, Crosshair, Settings, Target, Wrench } from "lucide-react";
import Image from "next/image";
import { CerakoteSection } from "@/components/services/CerakoteSection";
import { PricingTable } from "@/components/services/PricingTable";
import { ServiceBottomCTA } from "@/components/services/ServiceBottomCTA";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import { AR_PRICING, MAINTENANCE_INFO, OTHER_SERVICES } from "@/lib/services";

export const metadata = createMetadata({
	title: "Gunsmith Services",
	description:
		"Sight installation $40, scope mounting $50, trigger kits from $50, AR services from $40, Cerakote 100+ colors. Located inside C2 Tactical, Scottsdale AZ.",
	path: "/services",
	keywords: [
		"sight installation",
		"scope mounting",
		"trigger kit",
		"AR-15 gunsmith",
		"Cerakote Phoenix",
	],
});

const ICONS: Record<string, React.ElementType> = {
	"sight-installation": Crosshair,
	"scope-mounting": Target,
	"trigger-kits": Settings,
	"ar-services": Wrench,
};

export default function ServicesPage() {
	const services = OTHER_SERVICES.filter((s) => s.id !== "cerakote");

	return (
		<>
			<ServiceHero
				title="Gunsmith Services"
				description="Quick, common services — not a full-service machine shop"
				backgroundImage="/images/hero/hero-services.jpeg"
			/>

			{services.map((service, i) => {
				const Icon = ICONS[service.id] || Wrench;
				const isAR = service.id === "ar-services";

				return (
					<ScrollReveal key={service.id}>
						<section
							className={`py-16 sm:py-20 md:py-28 ${i % 2 === 0 ? "bg-white" : "bg-white-warm"}`}
						>
							<Container>
								{isAR && (
									<p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
										Army-Trained, Precision-Driven
									</p>
								)}
								<div className="grid items-start gap-12 lg:grid-cols-2">
									<div className={i % 2 === 1 ? "order-2 lg:order-1" : ""}>
										<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-vfw-navy-50 text-vfw-navy-700">
											<Icon className="h-6 w-6" />
										</div>
										<h2 className="font-heading text-2xl font-bold text-black sm:text-3xl md:text-4xl">
											{service.name}
										</h2>
										<p className="mt-2 text-3xl font-bold text-vfw-red-600 sm:text-4xl">
											{service.price}
										</p>
										<p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
											{service.description}
										</p>
										<ul className="mt-6 space-y-3">
											{service.features.map((f) => (
												<li key={f} className="flex items-center gap-3">
													<CheckCircle className="h-5 w-5 shrink-0 text-success" />
													<span className="text-slate-700">{f}</span>
												</li>
											))}
										</ul>
									</div>
									<div className={i % 2 === 1 ? "order-1 lg:order-2" : ""}>
										{isAR ? (
											<PricingTable items={AR_PRICING} />
										) : (
											<Image
												src={service.image}
												alt={service.name}
												width={800}
												height={600}
												sizes="(min-width: 1024px) 50vw, 100vw"
												className="w-full rounded-lg object-cover"
											/>
										)}
									</div>
								</div>
							</Container>
						</section>
					</ScrollReveal>
				);
			})}

			{/* Maintenance */}
			<ScrollReveal>
				<section className="bg-white py-16 sm:py-20 md:py-28">
					<Container>
						<SectionHeading
							overline="GENERAL MAINTENANCE"
							title="Repairs & Maintenance"
							description={`Shop rate: ${MAINTENANCE_INFO.shopRate} · Minimum: ${MAINTENANCE_INFO.minimum}`}
						/>
						<div className="mx-auto max-w-3xl">
							<div className="grid gap-6 md:grid-cols-2">
								<div>
									<h3 className="mb-4 font-heading text-xl font-bold text-black">
										Services Available
									</h3>
									<ul className="space-y-3">
										{MAINTENANCE_INFO.services.map((s) => (
											<li key={s} className="flex items-center gap-3">
												<CheckCircle className="h-5 w-5 shrink-0 text-success" />
												<span className="text-slate-700">{s}</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<div className="rounded-lg border-2 border-yellow-200 bg-yellow-50 p-6">
										<div className="mb-3 flex items-center gap-2 text-yellow-700">
											<AlertTriangle className="h-5 w-5" />
											<span className="font-bold">Please Note</span>
										</div>
										<p className="text-sm leading-relaxed text-yellow-800">
											{MAINTENANCE_INFO.description}
										</p>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</ScrollReveal>

			{/* Cerakote */}
			<ScrollReveal>
				<CerakoteSection />
			</ScrollReveal>

			{/* Bottom CTA */}
			<ServiceBottomCTA
				heading="Ready to Get"
				headingAccent="Started?"
				description="Drop by our shop inside C2 Tactical or give us a call. Most services completed same day."
				accentLabel="INSIDE C2 TACTICAL"
				accentDescription="Located inside C2 Tactical in North Scottsdale. Open Thursday through Saturday, 10am to 6pm. Walk-ins welcome."
			/>
		</>
	);
}
