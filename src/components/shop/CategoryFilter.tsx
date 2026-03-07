"use client";

import { cn } from "@/lib/utils";
import type { CategoryInfo, ProductCategory } from "@/types";

interface CategoryFilterProps {
	categories: CategoryInfo[];
	activeCategory: ProductCategory | null;
	onSelect: (slug: ProductCategory | null) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
	return (
		<div className="scrollbar-hide -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
			<div className="flex min-w-max gap-2">
				<button
					type="button"
					onClick={() => onSelect(null)}
					className={cn(
						"min-h-[44px] flex-shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-colors",
						activeCategory === null
							? "bg-vfw-red-600 text-white"
							: "bg-gray-100 text-charcoal hover:bg-gray-200",
					)}
				>
					All
				</button>
				{categories.map((category) => (
					<button
						type="button"
						key={category.slug}
						onClick={() => onSelect(category.slug)}
						className={cn(
							"min-h-[44px] flex-shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-colors",
							activeCategory === category.slug
								? "bg-vfw-red-600 text-white"
								: "bg-gray-100 text-charcoal hover:bg-gray-200",
						)}
					>
						{category.name}
					</button>
				))}
			</div>
		</div>
	);
}
