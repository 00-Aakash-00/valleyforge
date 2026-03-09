import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { BUSINESS, TAGLINE } from "@/lib/constants";

const SERVICE_LINKS = [
	{ href: "/cleaning-services", label: "Basic Cleaning" },
	{ href: "/cleaning-services", label: "Pro Cleaning" },
	{ href: "/services", label: "Sight Installation" },
	{ href: "/services", label: "Trigger Kits" },
	{ href: "/services", label: "AR Services" },
	{ href: "/services", label: "Cerakote" },
];

const QUICK_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/cleaning-services", label: "Cleaning Services" },
	{ href: "/services", label: "All Services" },
	{ href: "/shop", label: "Shop" },
];

const COMPANY_LINKS = [
	{ href: "/#about", label: "About Us" },
	{ href: "/#contact", label: "Contact" },
];

const LEGAL_LINKS = [
	{ href: "/terms", label: "Terms & Conditions" },
	{ href: "/privacy", label: "Privacy Policy" },
];

const EXPLORE_LINKS = [...QUICK_LINKS, ...COMPANY_LINKS];

function FooterLinkColumn({
	title,
	links,
}: {
	title: string;
	links: { href: string; label: string }[];
}) {
	return (
		<div>
			<h4 className="text-sm font-medium uppercase tracking-wider text-black">{title}</h4>
			<ul className="mt-4 space-y-3">
				{links.map((link) => (
					<li key={link.label}>
						<Link
							href={link.href}
							className="text-sm font-light text-gray-500 transition-colors hover:text-vfw-red-600"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

const GIANT_TEXT_CLASSES =
	"font-bold uppercase text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]";

const BG_IMAGE_STYLE = {
	backgroundImage: "url('/images/footer-bg.webp')",
};

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer>
			{/* Section 1: Image Banner — Mobile */}
			<div className="relative sm:hidden">
				<div className="h-40 overflow-hidden bg-vfw-navy-900">
					<div className="h-full w-full bg-cover bg-center" style={BG_IMAGE_STYLE} />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
				</div>
				<div
					className="pointer-events-none absolute inset-x-0 bottom-0 z-10 select-none px-4 pb-2 text-center"
					aria-hidden="true"
				>
					<p className={`whitespace-nowrap leading-[0.88] ${GIANT_TEXT_CLASSES}`}>
						<span className="block text-[10vw]">Valley Forge</span>
						<span className="block text-[9vw]">Weaponry</span>
					</p>
				</div>
			</div>

			{/* Section 1: Image Banner — Desktop (text overlaps into white) */}
			<div className="relative hidden overflow-hidden bg-vfw-navy-900 sm:block sm:h-56 md:h-64 lg:h-72">
				<div className="absolute inset-0 bg-cover bg-center" style={BG_IMAGE_STYLE} />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
				<div
					className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-[14%] select-none text-center"
					aria-hidden="true"
				>
					<span
						className={`whitespace-nowrap leading-none sm:text-[9vw] md:text-[7vw] lg:text-[6vw] ${GIANT_TEXT_CLASSES}`}
					>
						Valley Forge Weaponry
					</span>
				</div>
			</div>

			{/* Section 2: Footer Content — Mobile */}
			<div className="bg-white px-4 pt-16 pb-12 sm:hidden">
				<div className="mx-auto max-w-7xl">
					<Image
						src="/images/logo.png"
						alt="Valley Forge Weaponry"
						width={140}
						height={38}
						className="h-8 w-auto"
					/>
					<p className="mt-2 max-w-xs text-sm italic text-gray-500">{TAGLINE}</p>
					<SocialLinks className="mt-6" variant="outlined" />

					<div className="mt-10 space-y-8">
						<FooterLinkColumn title="Services" links={SERVICE_LINKS} />

						<div className="grid grid-cols-2 gap-8">
							<FooterLinkColumn title="Explore" links={EXPLORE_LINKS} />
							<FooterLinkColumn title="Legal" links={LEGAL_LINKS} />
						</div>
					</div>
				</div>
			</div>

			{/* Section 2: Footer Content — Desktop */}
			<div className="hidden bg-white px-4 pt-14 pb-12 sm:px-6 sm:pt-20 sm:block">
				<div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:gap-10 md:grid-cols-6">
					{/* Brand Column */}
					<div className="col-span-2">
						<Image
							src="/images/logo.png"
							alt="Valley Forge Weaponry"
							width={140}
							height={38}
							className="h-8 w-auto"
						/>
						<p className="mt-2 text-sm italic text-gray-500">{TAGLINE}</p>
						<SocialLinks className="mt-6" variant="outlined" />
					</div>

					{/* Services */}
					<FooterLinkColumn title="Services" links={SERVICE_LINKS} />

					{/* Quick Links */}
					<FooterLinkColumn title="Quick Links" links={QUICK_LINKS} />

					{/* Company */}
					<FooterLinkColumn title="Company" links={COMPANY_LINKS} />

					{/* Legal */}
					<FooterLinkColumn title="Legal" links={LEGAL_LINKS} />
				</div>
			</div>

			{/* Section 3: Copyright Bar */}
			<div className="border-t border-gray-200 bg-white px-4 py-6 sm:px-6">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
					<p className="text-xs text-gray-400">
						&copy; {year} {BUSINESS.name}. All rights reserved.
					</p>
					<p className="text-xs text-gray-400">{BUSINESS.name} LLC</p>
				</div>
			</div>
		</footer>
	);
}
