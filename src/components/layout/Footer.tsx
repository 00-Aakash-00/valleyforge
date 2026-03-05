import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { BUSINESS } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

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

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-black text-white">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
					{/* Brand */}
					<div>
						<h3 className="font-heading text-xl font-bold">Valley Forge Weaponry</h3>
						<p className="mt-2 text-sm italic text-white/60">Keep it clean. Keep it ready.</p>
						<SocialLinks className="mt-6" light />
					</div>

					{/* Services */}
					<div>
						<h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">
							Services
						</h4>
						<ul className="space-y-2">
							{SERVICE_LINKS.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-sm text-white/70 transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">
							Quick Links
						</h4>
						<ul className="space-y-2">
							{QUICK_LINKS.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-sm text-white/70 transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">
							Contact
						</h4>
						<ul className="space-y-3">
							<li className="flex items-start gap-3 text-sm text-white/70">
								<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-vfw-red-600" />
								<span>
									{BUSINESS.address}
									<br />
									{BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
									<br />
									<span className="text-white/50">({BUSINESS.location})</span>
								</span>
							</li>
							<li>
								<a
									href={`tel:${formatPhone(BUSINESS.phone)}`}
									className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
								>
									<Phone className="h-4 w-4 shrink-0 text-vfw-red-600" />
									{BUSINESS.phone}
								</a>
							</li>
							<li>
								<a
									href={`mailto:${BUSINESS.email}`}
									className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
								>
									<Mail className="h-4 w-4 shrink-0 text-vfw-red-600" />
									{BUSINESS.email}
								</a>
							</li>
							<li className="flex items-center gap-3 text-sm text-white/70">
								<Clock className="h-4 w-4 shrink-0 text-vfw-red-600" />
								{BUSINESS.hours.days}, {BUSINESS.hours.hours}
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
					&copy; {year} {BUSINESS.name}. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
