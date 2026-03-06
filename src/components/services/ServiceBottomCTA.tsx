import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DashedBorderBox } from "@/components/ui/DashedBorderBox";
import { BUSINESS } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

interface ServiceBottomCTAProps {
	heading: string;
	headingAccent: string;
	description: string;
	accentLabel: string;
	accentDescription: string;
}

export function ServiceBottomCTA({
	heading,
	headingAccent,
	description,
	accentLabel,
	accentDescription,
}: ServiceBottomCTAProps) {
	const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.coordinates.lat},${BUSINESS.coordinates.lng}`;

	return (
		<section className="bg-vfw-navy-900 py-16 sm:py-20 md:py-28">
			<Container>
				<DashedBorderBox variant="dark">
					<div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
						<div className="lg:col-span-3">
							<h2 className="font-heading text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
								{heading} <span className="text-vfw-red-600">{headingAccent}</span>
							</h2>
							<p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">{description}</p>
							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<a
									href={`tel:${formatPhone(BUSINESS.phone)}`}
									className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700 sm:w-auto"
								>
									<Phone className="h-5 w-5" />
									Call {BUSINESS.phone}
								</a>
								<a
									href={directionsUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/60 hover:bg-white/10 sm:w-auto"
								>
									<MapPin className="h-5 w-5" />
									Get Directions
								</a>
							</div>
						</div>
						<div className="lg:col-span-2">
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
								{accentLabel}
							</p>
							<p className="mt-3 text-white/60">{accentDescription}</p>
						</div>
					</div>
				</DashedBorderBox>
			</Container>
		</section>
	);
}
