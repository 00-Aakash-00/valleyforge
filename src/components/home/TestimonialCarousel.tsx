"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { ReviewCard } from "@/components/shared/ReviewCard";
import { StarRating } from "@/components/shared/StarRating";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUSINESS } from "@/lib/constants";
import { REVIEWS } from "@/lib/reviews";

export function TestimonialCarousel() {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (!scrollRef.current) return;
		const amount = scrollRef.current.offsetWidth * 0.8;
		scrollRef.current.scrollBy({
			left: direction === "left" ? -amount : amount,
			behavior: "smooth",
		});
	};

	return (
		<section className="bg-white py-20 md:py-28">
			<Container>
				<SectionHeading overline="WHAT OUR CUSTOMERS SAY" title="Top Rated in Arizona" />
				<div className="mb-10 flex items-center justify-center gap-3">
					<StarRating rating={5} />
					<span className="text-lg font-semibold text-black">{BUSINESS.googleRating}/5</span>
					<span className="text-slate-500">({BUSINESS.reviewCount} Google Reviews)</span>
				</div>

				<div className="relative">
					<button
						type="button"
						onClick={() => scroll("left")}
						className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-shadow hover:shadow-lg md:flex"
						aria-label="Previous reviews"
					>
						<ChevronLeft className="h-5 w-5" />
					</button>

					<div
						ref={scrollRef}
						className="scrollbar-hide flex snap-x gap-6 overflow-x-auto scroll-smooth pb-4"
					>
						{REVIEWS.map((review) => (
							<div
								key={review.id}
								className="w-[85vw] shrink-0 snap-center sm:w-[45vw] lg:w-[calc(33.333%-16px)]"
							>
								<ReviewCard review={review} />
							</div>
						))}
					</div>

					<button
						type="button"
						onClick={() => scroll("right")}
						className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition-shadow hover:shadow-lg md:flex"
						aria-label="Next reviews"
					>
						<ChevronRight className="h-5 w-5" />
					</button>
				</div>
			</Container>
		</section>
	);
}
