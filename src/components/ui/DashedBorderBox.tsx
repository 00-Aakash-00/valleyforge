"use client";

import { cn } from "@/lib/utils";

interface DashedBorderBoxProps {
	variant: "dark" | "light";
	children: React.ReactNode;
	className?: string;
}

export function DashedBorderBox({ variant, children, className }: DashedBorderBoxProps) {
	const isDark = variant === "dark";
	const borderColor = isDark ? "border-white/25" : "border-vfw-navy-700/25";
	const extensionClasses = cn("absolute hidden lg:block border-dashed", borderColor);
	const horizontalExtensionClasses = "w-8 2xl:w-20";

	return (
		<div className={cn("relative overflow-hidden lg:overflow-visible", className)}>
			{/* Dashed border container */}
			<div className={cn("relative border-2 border-dashed p-6 sm:p-10 lg:p-16", borderColor)}>
				{/* Corner lines extending OUTWARD from each corner */}

				{/* Top-left — horizontal extends left */}
				<div
					className={cn(
						extensionClasses,
						"-top-px right-full h-0 border-t-2",
						horizontalExtensionClasses,
					)}
					style={{ maskImage: "linear-gradient(to left, white, transparent)" }}
				/>
				{/* Top-left — vertical extends up */}
				<div
					className={cn(extensionClasses, "-left-px bottom-full h-20 w-0 border-l-2")}
					style={{ maskImage: "linear-gradient(to top, white, transparent)" }}
				/>

				{/* Top-right — horizontal extends right */}
				<div
					className={cn(
						extensionClasses,
						"-top-px left-full h-0 border-t-2",
						horizontalExtensionClasses,
					)}
					style={{ maskImage: "linear-gradient(to right, white, transparent)" }}
				/>
				{/* Top-right — vertical extends up */}
				<div
					className={cn(extensionClasses, "-right-px bottom-full h-20 w-0 border-r-2")}
					style={{ maskImage: "linear-gradient(to top, white, transparent)" }}
				/>

				{/* Bottom-left — horizontal extends left */}
				<div
					className={cn(
						extensionClasses,
						"-bottom-px right-full h-0 border-b-2",
						horizontalExtensionClasses,
					)}
					style={{ maskImage: "linear-gradient(to left, white, transparent)" }}
				/>
				{/* Bottom-left — vertical extends down */}
				<div
					className={cn(extensionClasses, "-left-px top-full h-20 w-0 border-l-2")}
					style={{ maskImage: "linear-gradient(to bottom, white, transparent)" }}
				/>

				{/* Bottom-right — horizontal extends right */}
				<div
					className={cn(
						extensionClasses,
						"-bottom-px left-full h-0 border-b-2",
						horizontalExtensionClasses,
					)}
					style={{ maskImage: "linear-gradient(to right, white, transparent)" }}
				/>
				{/* Bottom-right — vertical extends down */}
				<div
					className={cn(extensionClasses, "-right-px top-full h-20 w-0 border-r-2")}
					style={{ maskImage: "linear-gradient(to bottom, white, transparent)" }}
				/>

				{children}
			</div>
		</div>
	);
}
