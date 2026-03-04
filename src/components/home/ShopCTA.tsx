import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ShopCTA() {
	return (
		<section className="bg-vfw-navy-900 py-20 md:py-28">
			<Container className="text-center">
				<SectionHeading
					overline="REVOLUTIONARY SHOP"
					title="The Right Parts for the Right Price"
					description="Cleaning supplies, springs, pins, tools, and AR parts — everything you need to keep your firearms in top condition."
					light
				/>
				<a
					href="/shop"
					className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700"
				>
					<ShoppingBag className="h-5 w-5" />
					Shop Now
				</a>
			</Container>
		</section>
	);
}
