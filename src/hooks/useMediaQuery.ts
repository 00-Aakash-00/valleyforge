"use client";

import { useSyncExternalStore } from "react";

type StoreListener = () => void;

interface MediaQueryStore {
	mediaQueryList: MediaQueryList;
	listeners: Set<StoreListener>;
	handleChange: () => void;
}

const mediaQueryStores = new Map<string, MediaQueryStore>();

function getMediaQueryStore(query: string): MediaQueryStore | null {
	if (typeof window === "undefined") {
		return null;
	}

	const existingStore = mediaQueryStores.get(query);
	if (existingStore) {
		return existingStore;
	}

	const mediaQueryList = window.matchMedia(query);
	const listeners = new Set<StoreListener>();
	const handleChange = () => {
		for (const listener of listeners) {
			listener();
		}
	};

	if (typeof mediaQueryList.addEventListener === "function") {
		mediaQueryList.addEventListener("change", handleChange);
	} else {
		mediaQueryList.addListener(handleChange);
	}

	const store = {
		mediaQueryList,
		listeners,
		handleChange,
	};

	mediaQueryStores.set(query, store);
	return store;
}

function subscribe(query: string, onStoreChange: StoreListener) {
	const store = getMediaQueryStore(query);
	if (!store) {
		return () => {};
	}

	store.listeners.add(onStoreChange);

	return () => {
		store.listeners.delete(onStoreChange);

		if (store.listeners.size > 0) {
			return;
		}

		if (typeof store.mediaQueryList.addEventListener === "function") {
			store.mediaQueryList.removeEventListener("change", store.handleChange);
		} else {
			store.mediaQueryList.removeListener(store.handleChange);
		}

		mediaQueryStores.delete(query);
	};
}

function getSnapshot(query: string) {
	if (typeof window === "undefined") {
		return false;
	}

	return mediaQueryStores.get(query)?.mediaQueryList.matches ?? window.matchMedia(query).matches;
}

export function useMediaQuery(query: string): boolean {
	return useSyncExternalStore(
		(onStoreChange) => subscribe(query, onStoreChange),
		() => getSnapshot(query),
		() => false,
	);
}
