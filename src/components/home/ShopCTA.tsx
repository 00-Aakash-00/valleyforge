import { ShoppingBag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DashedBorderBox } from "@/components/ui/DashedBorderBox";

export function ShopCTA() {
	return (
		<section className="bg-vfw-navy-900 py-16 sm:py-20 md:py-28">
			<Container>
				<DashedBorderBox variant="dark">
					<div className="grid items-center gap-10 lg:grid-cols-5 lg:gap-16">
						<div className="lg:col-span-3">
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
								REVOLUTIONARY SHOP
							</p>
							<h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
								The Right Parts for the <span className="text-vfw-red-600">Right Price</span>
							</h2>
							<p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
								Cleaning supplies, springs, pins, tools, and AR parts — everything you need to keep
								your firearms in top condition.
							</p>
							<div className="mt-8 flex flex-col gap-4 sm:flex-row">
								<a
									href="/shop"
									className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700 sm:w-auto"
								>
									<ShoppingBag className="h-5 w-5" />
									Shop Now
								</a>
								<a
									href="/shop"
									className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/60 hover:bg-white/10 sm:w-auto"
								>
									View All Categories
								</a>
							</div>
						</div>
						<div className="lg:col-span-2">
							<p className="text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
								VETERAN OWNED
							</p>
							<p className="mt-3 text-white/60">
								Quality parts and supplies from a veteran-owned shop you can trust. We stock what
								works — no filler, no fluff — just reliable gear at fair prices.
							</p>
						</div>
					</div>
				</DashedBorderBox>
			</Container>
		</section>
	);
}
