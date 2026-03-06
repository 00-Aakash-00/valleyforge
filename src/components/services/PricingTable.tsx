import type { ARService } from "@/types";

export function PricingTable({ items }: { items: ARService[] }) {
	return (
		<div className="overflow-hidden rounded-lg border border-gray-200">
			{items.map((item, i) => (
				<div
					key={item.name}
					className={`flex flex-col items-start gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4 ${
						i % 2 === 0 ? "bg-white" : "bg-white-warm"
					}`}
				>
					<span className="font-medium text-charcoal">{item.name}</span>
					<span className="font-bold text-vfw-red-600">{item.price}</span>
				</div>
			))}
		</div>
	);
}
