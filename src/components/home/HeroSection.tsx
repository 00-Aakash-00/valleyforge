import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import { StarRating } from "@/components/shared/StarRating";
import { VeteranBadge } from "@/components/shared/VeteranBadge";
import { BUSINESS } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

export function HeroSection() {
	return (
		<section className="relative flex min-h-[100svh] items-center bg-vfw-navy-900 md:min-h-screen">
			<Image
				src="/images/hero/hero-main.jpeg"
				alt=""
				aria-hidden="true"
				fill
				priority
				sizes="100vw"
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-[calc(6rem+var(--safe-area-top))] pb-20 sm:px-6 sm:pt-32 sm:pb-28 lg:px-8 lg:py-32">
				<div className="max-w-2xl text-center lg:text-left">
					<p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/60">
						Veteran Owned &bull; Phoenix, AZ
					</p>
					<h1 className="font-heading text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
						Professional Firearm Cleaning &amp; Maintenance
					</h1>
					<p className="mt-4 font-heading text-xl italic text-vfw-red-600 sm:text-2xl">
						Keep it clean. Keep it ready.
					</p>
					<p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
						Top-rated gunsmith services inside C2 Tactical, Scottsdale. Quick turnaround. Fair
						prices.
					</p>

					<div className="mt-10 flex flex-col gap-4 sm:flex-row">
						<a
							href={`tel:${formatPhone(BUSINESS.phone)}`}
							className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700 sm:w-auto"
						>
							<Phone className="h-5 w-5" />
							Call {BUSINESS.phone}
						</a>
						<a
							href="#contact"
							className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border-2 border-white/30 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:border-white/60 hover:bg-white/10 sm:w-auto"
						>
							Send Us a Message
						</a>
					</div>

					<div className="mt-12 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
						<div className="flex items-center gap-3">
							<StarRating rating={5} />
							<span className="text-sm font-semibold text-white">
								{BUSINESS.googleRating}/5 Google ({BUSINESS.reviewCount} Reviews)
							</span>
						</div>
						<VeteranBadge light />
					</div>
				</div>
			</div>

			<a
				href="#services-preview"
				className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-white/50 transition-colors hover:text-white md:block"
				aria-label="Scroll down"
			>
				<ChevronDown className="h-8 w-8" />
			</a>
		</section>
	);
}
