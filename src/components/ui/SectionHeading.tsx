import { cn } from "@/lib/utils";

interface SectionHeadingProps {
	overline?: string;
	title: string;
	description?: string;
	centered?: boolean;
	light?: boolean;
}

export function SectionHeading({
	overline,
	title,
	description,
	centered = true,
	light = false,
}: SectionHeadingProps) {
	return (
		<div className={cn("mb-12", centered && "text-center")}>
			{overline && (
				<p
					className={cn(
						"mb-3 text-xs font-bold uppercase tracking-[0.2em]",
						light ? "text-white/70" : "text-vfw-red-600",
					)}
				>
					{overline}
				</p>
			)}
			<h2
				className={cn(
					"font-heading text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
					light ? "text-white" : "text-black",
				)}
			>
				{title}
			</h2>
			{description && (
				<p
					className={cn(
						"mx-auto mt-4 max-w-2xl text-lg",
						light ? "text-white/80" : "text-slate-500",
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
}
