import { Star } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
	return (
		<div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
			{[1, 2, 3, 4, 5].map((star) => (
				<Star
					key={star}
					className={`h-5 w-5 ${
						star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
					}`}
				/>
			))}
		</div>
	);
}
