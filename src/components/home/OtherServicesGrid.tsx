import { Crosshair, Palette, Settings, Target, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OTHER_SERVICES } from "@/lib/services";

const ICONS: Record<string, React.ElementType> = {
	"sight-installation": Crosshair,
	"scope-mounting": Target,
	"trigger-kits": Settings,
	"ar-services": Wrench,
	cerakote: Palette,
};

export function OtherServicesGrid() {
	return (
		<section className="bg-white-warm py-20 md:py-28">
			<Container>
				<SectionHeading overline="FULL SERVICE MENU" title="Other Gunsmith Services" />
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{OTHER_SERVICES.map((service) => {
						const Icon = ICONS[service.id] || Wrench;
						return (
							<div
								key={service.id}
								className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
							>
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-vfw-navy-50 text-vfw-navy-700">
									<Icon className="h-6 w-6" />
								</div>
								<h3 className="mt-4 font-heading text-xl font-bold text-black">{service.name}</h3>
								<p className="mt-1 text-lg font-bold text-vfw-red-600">{service.price}</p>
								<p className="mt-2 text-sm leading-relaxed text-slate-500">
									{service.description.slice(0, 100)}...
								</p>
							</div>
						);
					})}
				</div>
				<div className="mt-12 text-center">
					<Button href="/services" variant="secondary">
						View All Services &amp; Pricing
					</Button>
				</div>
			</Container>
		</section>
	);
}
