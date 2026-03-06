"use client";

import { useSyncExternalStore } from "react";

function subscribe(query: string, onStoreChange: () => void) {
	if (typeof window === "undefined") {
		return () => {};
	}

	const mediaQueryList = window.matchMedia(query);
	const handleChange = () => onStoreChange();

	if (typeof mediaQueryList.addEventListener === "function") {
		mediaQueryList.addEventListener("change", handleChange);

		return () => {
			mediaQueryList.removeEventListener("change", handleChange);
		};
	}

	mediaQueryList.addListener(handleChange);

	return () => {
		mediaQueryList.removeListener(handleChange);
	};
}

function getSnapshot(query: string) {
	if (typeof window === "undefined") {
		return false;
	}

	return window.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
	return useSyncExternalStore(
		(onStoreChange) => subscribe(query, onStoreChange),
		() => getSnapshot(query),
		() => false,
	);
}
