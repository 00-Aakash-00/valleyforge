import { Instagram } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FacebookIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
		</svg>
	);
}

function YelpIcon({ className }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M20.16 12.594l-4.995 1.433c-.96.276-1.72-.8-1.166-1.652l2.207-3.387c.553-.85 1.835-.46 1.92.584l.034 3.022zm-7.573 4.017l1.89-4.653c.377-.93-.694-1.776-1.528-1.205l-3.32 2.275c-.834.57-.498 1.847.503 1.913l2.455.67zM12.474.001C6.168-.1.712 5.282.712 11.724c0 2.467.789 4.75 2.12 6.617-.117-.55-.18-1.094-.18-1.618 0-3.503 2.138-6.508 5.172-7.756-.35-.86-.55-1.8-.55-2.784 0-3.872 3.135-7.014 6.998-7.014 1.888 0 3.603.755 4.857 1.98l-1.482 1.415c-.857-.84-2.034-1.358-3.375-1.358-2.63 0-4.762 2.14-4.762 4.778 0 .69.145 1.346.407 1.937l-.024.01c-3.57.858-6.062 4.086-6.062 7.888 0 .423.038.835.102 1.237A10.81 10.81 0 01.001 11.724C.001 5.256 5.255 0 11.723 0l.75.001z" />
		</svg>
	);
}

export function SocialLinks({ className, light = false }: { className?: string; light?: boolean }) {
	const links = [
		{ href: BUSINESS.social.instagram, icon: Instagram, label: "Instagram" },
		{ href: BUSINESS.social.facebook, icon: FacebookIcon, label: "Facebook" },
		{ href: BUSINESS.social.yelp, icon: YelpIcon, label: "Yelp" },
	];

	return (
		<div className={cn("flex gap-4", className)}>
			{links.map(({ href, icon: Icon, label }) => (
				<a
					key={label}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={label}
					className={cn(
						"flex h-10 w-10 items-center justify-center rounded-full transition-colors",
						light
							? "bg-white/10 text-white hover:bg-white/20"
							: "bg-gray-100 text-slate-700 hover:bg-gray-200",
					)}
				>
					<Icon className="h-5 w-5" />
				</a>
			))}
		</div>
	);
}
