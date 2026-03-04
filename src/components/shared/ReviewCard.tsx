import type { Review } from "@/types";
import { StarRating } from "./StarRating";

export function ReviewCard({ review }: { review: Review }) {
	return (
		<div className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm">
			<StarRating rating={review.rating} />
			<p className="mt-4 flex-1 text-slate-700 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
			<div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
				<span className="font-semibold text-black">{review.name}</span>
				<span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-slate-500">
					{review.source}
				</span>
			</div>
		</div>
	);
}
