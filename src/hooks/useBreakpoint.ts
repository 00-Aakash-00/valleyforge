"use client";

import { useMediaQuery } from "./useMediaQuery";

type Breakpoint = "phone" | "tablet" | "desktop";

interface BreakpointState {
	breakpoint: Breakpoint;
	isPhone: boolean;
	isTablet: boolean;
	isDesktop: boolean;
	isMobile: boolean;
}

export function useBreakpoint(): BreakpointState {
	const isDesktop = useMediaQuery("(min-width: 1024px)");
	const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
	const isPhone = !isDesktop && !isTablet;

	return {
		breakpoint: isDesktop ? "desktop" : isTablet ? "tablet" : "phone",
		isPhone,
		isTablet,
		isDesktop,
		isMobile: !isDesktop,
	};
}
