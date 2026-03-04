"use client";

import { Menu, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { cn, formatPhone } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/cleaning-services", label: "Cleaning" },
	{ href: "/services", label: "Services" },
	{ href: "/shop", label: "Shop" },
];

export function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const isHomePage = pathname === "/";
	const useSolidHeader = !isHomePage || scrolled;

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!pathname) return;
		setMenuOpen(false);
	}, [pathname]);

	return (
		<>
			<header
				className={cn(
					"fixed top-0 right-0 left-0 z-40 transition-all duration-300",
					useSolidHeader ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent",
				)}
			>
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
					<a href="/" className="flex items-center gap-2">
						<span
							className={cn(
								"font-heading text-xl font-bold transition-colors",
								useSolidHeader ? "text-black" : "text-white",
							)}
						>
							Valley Forge Weaponry
						</span>
					</a>

					<nav className="hidden items-center gap-1 lg:flex">
						{NAV_LINKS.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className={cn(
									"rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors",
									useSolidHeader
										? "text-charcoal hover:bg-gray-100"
										: "text-white/90 hover:text-white hover:bg-white/10",
								)}
							>
								{link.label}
							</a>
						))}
						<a
							href={`tel:${formatPhone(BUSINESS.phone)}`}
							className="ml-4 inline-flex items-center gap-2 rounded-full bg-vfw-red-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700"
						>
							<Phone className="h-4 w-4" />
							{BUSINESS.phone}
						</a>
					</nav>

					<button
						type="button"
						onClick={() => setMenuOpen(true)}
						className={cn(
							"flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
							useSolidHeader ? "text-black" : "text-white",
						)}
						aria-label="Open menu"
					>
						<Menu className="h-6 w-6" />
					</button>
				</div>
			</header>

			<MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
		</>
	);
}
