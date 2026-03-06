import { cn } from "@/lib/utils";

interface BadgeProps {
	children: React.ReactNode;
	variant?: "red" | "navy" | "gray" | "success";
	className?: string;
}

const variantStyles = {
	red: "bg-vfw-red-50 text-vfw-red-600",
	navy: "bg-vfw-navy-50 text-vfw-navy-700",
	gray: "bg-gray-100 text-slate-700",
	success: "bg-green-50 text-success",
};

export function Badge({ children, variant = "gray", className }: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] sm:text-xs sm:tracking-wider",
				variantStyles[variant],
				className,
			)}
		>
			{children}
		</span>
	);
}
