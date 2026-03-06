"use client";

import { useEffect } from "react";

let lockCount = 0;
let previousBodyOverflow = "";
let previousBodyPaddingRight = "";
let previousHtmlOverflow = "";

export function useBodyScrollLock(locked: boolean) {
	useEffect(() => {
		if (!locked || typeof document === "undefined") {
			return;
		}

		const { body, documentElement } = document;

		if (lockCount === 0) {
			previousBodyOverflow = body.style.overflow;
			previousBodyPaddingRight = body.style.paddingRight;
			previousHtmlOverflow = documentElement.style.overflow;

			const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
			body.style.overflow = "hidden";
			documentElement.style.overflow = "hidden";

			if (scrollbarWidth > 0) {
				body.style.paddingRight = `${scrollbarWidth}px`;
			}
		}

		lockCount += 1;

		return () => {
			lockCount -= 1;

			if (lockCount === 0) {
				body.style.overflow = previousBodyOverflow;
				body.style.paddingRight = previousBodyPaddingRight;
				documentElement.style.overflow = previousHtmlOverflow;
			}
		};
	}, [locked]);
}
