import { Container } from "@/components/ui/Container";

const ACCENT = "#c41e2a";

const FAQ_ITEMS = [
	{
		value: "after-range-day",
		question: "After Every Range Day",
		answer:
			"Manufacturers recommend cleaning your firearm after every use. Carbon and fouling build up with each round fired — leaving residue behind accelerates wear, causes malfunctions, and can affect accuracy over time. Regular cleaning after range sessions keeps your firearm running like new.",
	},
	{
		value: "every-500-1000-rounds",
		question: "Every 500–1,000 Rounds",
		answer:
			"At minimum, a thorough cleaning every 500–1,000 rounds keeps your firearm functioning reliably and prevents excessive wear. High round counts without cleaning allow carbon fouling to harden inside the action, making it significantly harder to remove and potentially causing irreversible damage.",
	},
	{
		value: "before-storage",
		question: "Before Long-Term Storage",
		answer:
			"Always clean and properly lubricate your firearm before storing. This prevents rust, corrosion, and degradation of components. Even moisture in the air can cause pitting on bare metal — a light coat of oil after a thorough cleaning is your best defense against long-term storage damage.",
	},
	{
		value: "how-long",
		question: "How long does professional cleaning take?",
		answer:
			"Most basic cleanings are completed same-day or next-day. Pro deep cleanings with ultrasonic treatment typically take 24–48 hours depending on the level of fouling and current shop volume. We'll give you an honest estimate when you drop off.",
	},
	{
		value: "ultrasonic-safe",
		question: "Can ultrasonic cleaning damage my firearm?",
		answer:
			"No — ultrasonic cleaning is safe for all modern firearms. The process uses high-frequency sound waves in a cleaning solution to remove carbon and fouling without abrasion. Wood stocks and certain optics are removed before cleaning to ensure every component is handled correctly.",
	},
	{
		value: "disassembly",
		question: "Do I need to disassemble before dropping off?",
		answer:
			"A basic field strip is appreciated but not required. Our gunsmiths will handle full disassembly as part of the service. If you're unsure how to field-strip your firearm, simply bring it in as-is — we'll take care of everything from there.",
	},
];

const faqJsonLd = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQ_ITEMS.map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer,
		},
	})),
};
const FAQ_JSON_LD = JSON.stringify(faqJsonLd);

function MobileFaqItem({
	answer,
	question,
	defaultOpen = false,
}: {
	answer: string;
	question: string;
	defaultOpen?: boolean;
}) {
	return (
		<details className="group border-b border-slate-200" open={defaultOpen}>
			<summary className="flex cursor-pointer list-none items-center justify-between py-5 text-left text-base font-semibold text-black sm:text-lg [&::-webkit-details-marker]:hidden">
				<span className="flex-1">{question}</span>
				<span
					aria-hidden="true"
					className="ml-4 shrink-0 text-2xl font-light leading-none"
					style={{ color: ACCENT, lineHeight: 1 }}
				>
					<span className="group-open:hidden">+</span>
					<span className="hidden group-open:inline">-</span>
				</span>
			</summary>
			<div className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">{answer}</div>
		</details>
	);
}

function DesktopFaqItem({ answer, question }: { answer: string; question: string }) {
	return (
		<div className="border-b border-slate-200 py-5">
			<h3 className="text-lg font-semibold text-black">{question}</h3>
			<p className="mt-3 text-base leading-relaxed text-slate-600">{answer}</p>
		</div>
	);
}

export function FaqSection() {
	return (
		<section className="bg-white-warm py-16 sm:py-20 md:py-28">
			<script type="application/ld+json">{FAQ_JSON_LD}</script>
			<Container>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
					<div className="lg:sticky lg:top-32 lg:self-start">
						<p
							className="font-heading font-bold uppercase leading-tight text-black"
							style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
						>
							Frequently
							<br />
							<span style={{ color: ACCENT }}>asked</span>
							<br />
							questions
						</p>
					</div>

					<div>
						<div className="lg:hidden">
							{FAQ_ITEMS.map((item, index) => (
								<MobileFaqItem
									key={item.value}
									question={item.question}
									answer={item.answer}
									defaultOpen={index === 0}
								/>
							))}
						</div>
						<div className="hidden lg:block">
							{FAQ_ITEMS.map((item) => (
								<DesktopFaqItem key={item.value} question={item.question} answer={item.answer} />
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
