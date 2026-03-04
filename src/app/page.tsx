import { AboutPreview } from "@/components/home/AboutPreview";
import { CleaningServicesPreview } from "@/components/home/CleaningServicesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { HeroSection } from "@/components/home/HeroSection";
import { OtherServicesGrid } from "@/components/home/OtherServicesGrid";
import { ShopCTA } from "@/components/home/ShopCTA";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<ScrollReveal>
				<CleaningServicesPreview />
			</ScrollReveal>
			<ScrollReveal>
				<OtherServicesGrid />
			</ScrollReveal>
			<ScrollReveal>
				<ShopCTA />
			</ScrollReveal>
			<ScrollReveal>
				<TestimonialCarousel />
			</ScrollReveal>
			<ScrollReveal>
				<AboutPreview />
			</ScrollReveal>
			<ScrollReveal>
				<ContactCTA />
			</ScrollReveal>
		</>
	);
}
