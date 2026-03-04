import { ExternalLink, Palette } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CerakoteSection() {
	return (
		<section className="bg-vfw-navy-900 py-20 md:py-28">
			<Container>
				<SectionHeading
					overline="CUSTOM FINISHES"
					title="Cerakote Services"
					description="100+ colors available. Solid colors, camouflage patterns, battleworn finishes, and custom designs."
					light
				/>
				<div className="mx-auto max-w-2xl text-center">
					<div className="mb-8 flex justify-center">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
							<Palette className="h-8 w-8 text-white" />
						</div>
					</div>
					<div className="rounded-lg bg-white/5 p-6">
						<p className="mb-2 text-sm font-bold uppercase tracking-wider text-white/50">
							Cerakote Partner
						</p>
						<p className="text-xl font-bold text-white">Lawless Coatings</p>
						<div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
							<a
								href="https://lawlesscoating.com"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
							>
								lawlesscoating.com
								<ExternalLink className="h-3 w-3" />
							</a>
							<span className="hidden text-white/30 sm:inline">&bull;</span>
							<a
								href="https://instagram.com/lawlesscoatingsaz"
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm text-white/70 transition-colors hover:text-white"
							>
								@lawlesscoatingsaz
							</a>
						</div>
					</div>
					<a
						href="#contact"
						className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700"
					>
						Contact for Quote
					</a>
				</div>
			</Container>
		</section>
	);
}
