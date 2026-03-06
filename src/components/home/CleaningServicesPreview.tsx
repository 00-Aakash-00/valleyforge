import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLEANING_SERVICES } from "@/lib/services";

export function CleaningServicesPreview() {
	return (
		<section
			id="services-preview"
			className="scroll-mt-24 bg-white py-16 sm:scroll-mt-28 sm:py-20 md:py-28"
		>
			<Container>
				<SectionHeading overline="OUR SPECIALTY" title="Firearm Cleaning Services" />
				<div className="grid gap-8 md:grid-cols-2">
					{CLEANING_SERVICES.map((service) => (
						<div
							key={service.id}
							className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
						>
							<Badge variant={service.id === "basic-cleaning" ? "navy" : "red"}>
								{service.badge}
							</Badge>
							<h3 className="mt-4 font-heading text-2xl font-bold text-black">{service.name}</h3>
							<p className="mt-1 text-3xl font-bold text-vfw-red-600">{service.price}</p>
							{service.priceDetails && (
								<div className="mt-2 space-y-1">
									{service.priceDetails.map((detail) => (
										<p key={detail} className="text-sm text-slate-500">
											{detail}
										</p>
									))}
								</div>
							)}
							<ul className="mt-6 space-y-3">
								{service.features.map((feature) => (
									<li key={feature} className="flex items-center gap-3">
										<CheckCircle className="h-5 w-5 shrink-0 text-success" />
										<span className="text-slate-700">{feature}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="mt-12 text-center">
					<Button href="/cleaning-services" variant="secondary">
						View All Cleaning Services
					</Button>
				</div>
			</Container>
		</section>
	);
}
