import type { ARService } from "@/types";

export function PricingTable({ items }: { items: ARService[] }) {
	return (
		<div className="overflow-hidden rounded-lg border border-gray-200">
			{items.map((item, i) => (
				<div
					key={item.name}
					className={`flex items-center justify-between px-6 py-4 ${
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
