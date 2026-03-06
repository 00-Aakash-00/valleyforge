import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
	title: "Terms & Conditions",
	description:
		"Read the basic terms governing the use of the Valley Forge Weaponry website and related services.",
	path: "/terms",
	keywords: ["terms and conditions", "website terms", "service terms"],
});

export default function TermsPage() {
	return (
		<section className="bg-white py-20 sm:py-24 md:py-32">
			<Container>
				<div className="mx-auto max-w-3xl">
					<p className="text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
						Terms &amp; Conditions
					</p>
					<h1 className="mt-3 font-heading text-3xl font-bold text-black sm:text-4xl md:text-5xl">
						Website terms of use
					</h1>
					<div className="mt-10 space-y-8 text-base leading-7 text-slate-700">
						<section>
							<h2 className="text-2xl font-bold text-black">General use</h2>
							<p className="mt-3">
								By using this website, you agree to use it lawfully and only for information,
								product browsing, and contacting Valley Forge Weaponry about its services.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-black">Service and pricing information</h2>
							<p className="mt-3">
								Prices, service descriptions, availability, and turnaround times shown on the site
								are provided for general guidance and may change without notice. Final quotes and
								timelines are confirmed directly with the shop.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-black">Third-party links</h2>
							<p className="mt-3">
								This website may link to third-party websites or social platforms. Valley Forge
								Weaponry is not responsible for the content, policies, or operation of those
								external services.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-black">Intellectual property</h2>
							<p className="mt-3">
								Unless otherwise noted, the text, branding, and design elements on this website are
								the property of Valley Forge Weaponry and may not be copied or reused without
								permission.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-black">Contact</h2>
							<p className="mt-3">
								Questions about these terms can be sent to{" "}
								<a
									href="mailto:info@valleyforgeweaponry.com"
									className="text-vfw-red-600 transition-colors hover:text-vfw-red-700"
								>
									info@valleyforgeweaponry.com
								</a>
								.
							</p>
						</section>
					</div>
				</div>
			</Container>
		</section>
	);
}
