"use client";

import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
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
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	const isHomePage = pathname === "/";
	const useTransparentHeader = isHomePage && !scrolled && !menuOpen;

	useEffect(() => {
		const onScroll = () => {
			const hasScrolled = window.scrollY > 50;
			startTransition(() => {
				setScrolled((current) => (current === hasScrolled ? current : hasScrolled));
			});
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		if (!pathname) return;
		setMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (isDesktop) {
			setMenuOpen(false);
		}
	}, [isDesktop]);

	return (
		<>
			<header
				className={cn(
					"fixed top-0 right-0 left-0 z-40 transition-all duration-300",
					useTransparentHeader
						? "bg-transparent shadow-none backdrop-blur-none"
						: "bg-white/95 shadow-sm backdrop-blur-sm",
				)}
			>
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/images/logo.png"
							alt="Valley Forge Weaponry"
							width={160}
							height={44}
							className="h-8 w-auto sm:h-10"
							priority
						/>
					</Link>

					<nav className="hidden items-center gap-1 lg:flex">
						{NAV_LINKS.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className={cn(
									"rounded-lg px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors",
									useTransparentHeader
										? "text-white/90 hover:bg-white/10 hover:text-white"
										: "text-charcoal hover:bg-gray-100",
								)}
							>
								{link.label}
							</Link>
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
							"flex h-11 w-11 items-center justify-center rounded-lg lg:hidden",
							useTransparentHeader ? "text-white" : "text-black",
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
