"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import { StarRating } from "@/components/shared/StarRating";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BUSINESS } from "@/lib/constants";
import { REVIEWS } from "@/lib/reviews";
import type { Review } from "@/types";

function splitReviewsByRow(reviews: Review[]) {
	const firstRow: Review[] = [];
	const secondRow: Review[] = [];

	for (const [index, review] of reviews.entries()) {
		if (index % 2 === 0) {
			firstRow.push(review);
		} else {
			secondRow.push(review);
		}
	}

	return { firstRow, secondRow };
}

function repeatReviews(reviews: Review[]) {
	return [0, 1, 2].flatMap((copy) =>
		reviews.map((review) => ({
			key: `${review.id}-copy-${copy}`,
			review,
		})),
	);
}

const { firstRow: ROW_1_REVIEWS, secondRow: ROW_2_REVIEWS } = splitReviewsByRow(REVIEWS);
const ROW_1_REPEATED_REVIEWS = repeatReviews(ROW_1_REVIEWS);
const ROW_2_REPEATED_REVIEWS = repeatReviews(ROW_2_REVIEWS);

function SourceBadge({ source }: { source: "Google" | "Yelp" }) {
	return (
		<span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-slate-700">
			{source}
		</span>
	);
}

function TestimonialCard({ review }: { review: Review }) {
	const initial = review.name.charAt(0).toUpperCase();
	return (
		<div className="w-[300px] shrink-0 rounded-2xl border border-gray-200 bg-white p-6 select-none sm:w-[380px] lg:w-[400px]">
			<div className="mb-3 flex items-center gap-3">
				<div className="flex h-8 w-8 items-center justify-center rounded-full bg-vfw-red-600 text-sm font-bold text-white">
					{initial}
				</div>
				<div className="flex items-center gap-2">
					<span className="text-sm font-semibold text-black">{review.name}</span>
					<SourceBadge source={review.source} />
				</div>
			</div>
			<StarRating rating={review.rating} />
			<p className="mt-3 text-sm leading-relaxed text-slate-700">&ldquo;{review.text}&rdquo;</p>
		</div>
	);
}

function MarqueeRow({
	reviews,
	repeatedReviews,
	direction,
	isPaused,
	onPause,
	onResume,
	reducedMotion,
}: {
	reviews: Review[];
	repeatedReviews: { key: string; review: Review }[];
	direction: "left" | "right";
	isPaused: boolean;
	onPause: () => void;
	onResume: () => void;
	reducedMotion: boolean;
}) {
	const scrollRef = useRef<HTMLDivElement>(null);
	const rafRef = useRef<number>(0);
	const handlePause = useEffectEvent(() => {
		onPause();
	});
	const handleResume = useEffectEvent(() => {
		onResume();
	});

	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		const pause = () => {
			handlePause();
		};
		const resume = () => {
			handleResume();
		};

		el.addEventListener("mouseenter", pause);
		el.addEventListener("mouseleave", resume);
		el.addEventListener("touchstart", pause, { passive: true });
		el.addEventListener("touchend", resume, { passive: true });
		el.addEventListener("touchcancel", resume, { passive: true });

		return () => {
			el.removeEventListener("mouseenter", pause);
			el.removeEventListener("mouseleave", resume);
			el.removeEventListener("touchstart", pause);
			el.removeEventListener("touchend", resume);
			el.removeEventListener("touchcancel", resume);
		};
	}, []);

	useEffect(() => {
		if (reducedMotion) return;

		const el = scrollRef.current;
		if (!el) return;

		el.scrollLeft = el.scrollWidth / 3;
	}, [reducedMotion]);

	useEffect(() => {
		if (reducedMotion) return;

		const animate = () => {
			const el = scrollRef.current;
			if (!el) return;

			const third = el.scrollWidth / 3;

			if (direction === "left") {
				el.scrollLeft += 0.5;
				if (el.scrollLeft >= third * 2) {
					el.scrollLeft = third;
				}
			} else {
				el.scrollLeft -= 0.5;
				if (el.scrollLeft <= 0) {
					el.scrollLeft = third;
				}
			}

			rafRef.current = requestAnimationFrame(animate);
		};

		if (!isPaused) {
			rafRef.current = requestAnimationFrame(animate);
		}

		return () => {
			if (rafRef.current) {
				cancelAnimationFrame(rafRef.current);
			}
		};
	}, [direction, isPaused, reducedMotion]);

	if (reducedMotion) {
		return (
			<div className="scrollbar-hide flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-6">
				{reviews.map((review) => (
					<div key={review.id} className="snap-center">
						<TestimonialCard review={review} />
					</div>
				))}
			</div>
		);
	}

	return (
		<div ref={scrollRef} className="scrollbar-hide flex gap-4 overflow-hidden sm:gap-6">
			{repeatedReviews.map(({ key, review }) => (
				<TestimonialCard key={key} review={review} />
			))}
		</div>
	);
}

export function TestimonialCarousel() {
	const [isPaused, setIsPaused] = useState(false);
	const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

	const pause = () => setIsPaused(true);
	const resume = () => setIsPaused(false);

	return (
		<section className="overflow-hidden bg-white py-16 sm:py-20 md:py-28">
			<Container>
				<SectionHeading overline="WHAT OUR CUSTOMERS SAY" title="Top Rated in Arizona" />
				<div className="mb-10 flex items-center justify-center gap-3">
					<StarRating rating={5} />
					<span className="text-lg font-semibold text-black">{BUSINESS.googleRating}/5</span>
					<span className="text-slate-500">({BUSINESS.reviewCount} Google Reviews)</span>
				</div>
			</Container>

			{/* Full-width scroll rows */}
			<div className="relative">
				{/* Left gradient */}
				<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24 lg:w-32" />
				{/* Right gradient */}
				<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24 lg:w-32" />

				<div className="space-y-4 sm:space-y-6">
					<MarqueeRow
						reviews={ROW_1_REVIEWS}
						repeatedReviews={ROW_1_REPEATED_REVIEWS}
						direction="left"
						isPaused={isPaused}
						onPause={pause}
						onResume={resume}
						reducedMotion={reducedMotion}
					/>
					<MarqueeRow
						reviews={ROW_2_REVIEWS}
						repeatedReviews={ROW_2_REPEATED_REVIEWS}
						direction="right"
						isPaused={isPaused}
						onPause={pause}
						onResume={resume}
						reducedMotion={reducedMotion}
					/>
				</div>
			</div>
		</section>
	);
}
