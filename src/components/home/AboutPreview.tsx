import Image from "next/image";
import { VeteranBadge } from "@/components/shared/VeteranBadge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
	return (
		<section className="bg-white-warm py-20 md:py-28">
			<Container>
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div>
						<SectionHeading
							overline="MEET THE FOUNDER"
							title="Army Veteran. Professional Gunsmith."
							centered={false}
						/>
						<VeteranBadge className="mb-6" />
						<div className="space-y-4 text-lg leading-relaxed text-slate-700">
							<p>
								Stephen Kopp is an Army veteran and professional gunsmith who founded Valley Forge
								Weaponry with a simple mission — provide quality firearm cleaning and maintenance
								services at fair prices.
							</p>
							<p>
								Located inside C2 Tactical in Scottsdale, Stephen brings military-grade attention to
								detail to every firearm that comes through his shop. Whether it&apos;s a basic
								cleaning after a range day or a complete AR build, every job gets the same level of
								care and precision.
							</p>
							<p>
								With years of experience and a passion for firearms, Stephen has built a reputation
								as one of the top-rated gunsmiths in the Phoenix Valley — backed by a 4.9-star
								Google rating and over 115 five-star reviews.
							</p>
						</div>
					</div>
					<div className="flex justify-center lg:justify-end">
						<Image
							src="/images/about/founder-potrait.png"
							alt="Stephen Kopp — Army veteran and founder of Valley Forge Weaponry"
							width={600}
							height={750}
							sizes="(min-width: 1024px) 28rem, 100vw"
							className="w-full max-w-md rounded-lg object-cover"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}
