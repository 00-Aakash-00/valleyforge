"use client";

import { useEffect, useRef, useState } from "react";

export function MapEmbed() {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin: "200px" },
		);
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div ref={ref} className="h-56 w-full overflow-hidden rounded-lg bg-gray-100 sm:h-64 md:h-80">
			{visible && (
				<iframe
					title="Valley Forge Weaponry Location"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.8!2d-111.929!3d33.660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM5JzM2LjAiTiAxMTHCsDU1JzQ0LjAiVw!5e0!3m2!1sen!2sus!4v1600000000000"
					width="100%"
					height="100%"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				/>
			)}
		</div>
	);
}
