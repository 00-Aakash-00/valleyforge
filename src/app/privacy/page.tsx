import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
	title: "Privacy Policy",
	description:
		"Review how Valley Forge Weaponry handles contact information, analytics, and basic website usage data.",
	path: "/privacy",
	keywords: ["privacy policy", "data usage", "contact information"],
});

export default function PrivacyPolicyPage() {
	return (
		<section className="bg-white py-20 sm:py-24 md:py-32">
			<Container>
				<div className="mx-auto max-w-3xl">
					<p className="text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
						Privacy Policy
					</p>
					<h1 className="mt-3 font-heading text-3xl font-bold text-black sm:text-4xl md:text-5xl">
						How we handle your information
					</h1>
					<div className="mt-10 space-y-8 text-base leading-7 text-slate-700">
						<section>
							<h2 className="text-2xl font-bold text-black">Information you share with us</h2>
							<p className="mt-3">
								When you call, email, or submit the contact form on this website, the information
								you provide is used only to respond to your request, schedule service, or answer
								questions about products and gunsmith work.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-black">How information is used</h2>
							<p className="mt-3">
								We use contact details to communicate with customers about services, orders,
								appointments, and support. We do not sell personal information to third parties.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-black">Website data</h2>
							<p className="mt-3">
								This site may collect limited technical information such as browser type, device
								information, and page visits through standard hosting or analytics tools. That data
								is used to maintain site performance and understand basic traffic patterns.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-black">Third-party services</h2>
							<p className="mt-3">
								The website links to third-party services including Google Maps and social
								platforms. Those services operate under their own privacy policies and practices.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-bold text-black">Contact</h2>
							<p className="mt-3">
								If you have questions about this policy, contact Valley Forge Weaponry at{" "}
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
