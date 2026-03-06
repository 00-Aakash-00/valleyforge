import { ExternalLink, Palette } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DashedBorderBox } from "@/components/ui/DashedBorderBox";

export function CerakoteSection() {
	return (
		<section className="bg-vfw-navy-900 py-20 md:py-28">
			<Container>
				<DashedBorderBox variant="dark">
					<div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
						<div className="lg:col-span-3">
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
								CUSTOM FINISHES
							</p>
							<h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
								Cerakote <span className="text-vfw-red-600">Services</span>
							</h2>
							<p className="mt-4 max-w-xl text-lg text-white/70">
								100+ colors available. Solid colors, camouflage patterns, battleworn finishes, and
								custom designs.
							</p>
							<a
								href="#contact"
								className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700"
							>
								Contact for Quote
							</a>
						</div>
						<div className="lg:col-span-2">
							<div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
								<Palette className="h-8 w-8 text-white" />
							</div>
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
								CERAKOTE PARTNER
							</p>
							<div className="mt-3 rounded-lg bg-white/5 p-6">
								<p className="text-xl font-bold text-white">Lawless Coatings</p>
								<div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
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
						</div>
					</div>
				</DashedBorderBox>
			</Container>
		</section>
	);
}
