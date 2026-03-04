import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export function VeteranBadge({
	className,
	light = false,
}: {
	className?: string;
	light?: boolean;
}) {
	return (
		<div
			className={cn(
				"inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold",
				light ? "bg-white/10 text-white" : "bg-vfw-navy-50 text-vfw-navy-700",
				className,
			)}
		>
			<Shield className="h-4 w-4" />
			Veteran Owned
		</div>
	);
}
