"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { ServiceScrollCard } from "@/components/home/ServiceScrollCard";
import { Button } from "@/components/ui/Button";
import { OTHER_SERVICES } from "@/lib/services";

export function OtherServicesGrid() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (!scrollRef.current) return;
		const cardWidth =
			scrollRef.current.querySelector<HTMLElement>(":scope > *")?.offsetWidth ?? 340;
		const scrollAmount = cardWidth + 24; // card width + gap
		scrollRef.current.scrollBy({
			left: direction === "left" ? -scrollAmount : scrollAmount,
			behavior: "smooth",
		});
	};

	return (
		<section className="bg-white-warm py-16 sm:py-20 md:py-28 overflow-hidden">
			{/* Header */}
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
				<div className="flex items-end justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-vfw-red-600">
							Full Service Menu
						</p>
						<h2 className="mt-2 font-heading text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
							Other Gunsmith Services
						</h2>
						<p className="mt-3 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
							From sight installation to custom Cerakote finishes — expert gunsmith services for
							every firearm.
						</p>
					</div>
					<div className="hidden gap-3 sm:flex">
						<button
							type="button"
							onClick={() => scroll("left")}
							className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-slate-700 transition-colors hover:bg-gray-100 cursor-pointer"
							aria-label="Scroll left"
						>
							<ArrowLeft className="h-5 w-5" />
						</button>
						<button
							type="button"
							onClick={() => scroll("right")}
							className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-slate-700 transition-colors hover:bg-gray-100 cursor-pointer"
							aria-label="Scroll right"
						>
							<ArrowRight className="h-5 w-5" />
						</button>
					</div>
				</div>
			</div>

			{/* Horizontal scroll container */}
			<div
				ref={scrollRef}
				className="horizontal-scroll pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
			>
				{OTHER_SERVICES.map((service, i) => (
					<ServiceScrollCard
						key={service.id}
						name={service.name}
						description={service.description}
						imageSrc={service.cardImage ?? service.image}
						index={i}
					/>
				))}
				{/* End spacer */}
				<div className="w-6 shrink-0" />
			</div>

			{/* Footer */}
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
				<div className="flex items-center justify-between">
					<p className="hidden items-center gap-2 text-xs uppercase tracking-widest text-slate-500 sm:flex">
						<ArrowRight className="h-3.5 w-3.5" />
						Scroll to explore
					</p>
					<Button href="/services" variant="secondary">
						View All Services &amp; Pricing
					</Button>
				</div>
			</div>
		</section>
	);
}
