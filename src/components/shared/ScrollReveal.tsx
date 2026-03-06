"use client";

import { useEffect, useRef, useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

export function ScrollReveal({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);
	const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
	const { isMobile } = useBreakpoint();

	useEffect(() => {
		if (reduceMotion) {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, [reduceMotion]);

	return (
		<div
			ref={ref}
			className={cn(
				"transition-all ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
				reduceMotion ? "duration-0" : isMobile ? "duration-500" : "duration-700",
				visible
					? "translate-y-0 opacity-100"
					: reduceMotion
						? "opacity-100"
						: isMobile
							? "translate-y-4 opacity-0"
							: "translate-y-8 opacity-0",
				className,
			)}
		>
			{children}
		</div>
	);
}
