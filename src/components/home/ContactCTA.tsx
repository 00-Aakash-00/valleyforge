"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Container } from "@/components/ui/Container";
import { DashedBorderBox } from "@/components/ui/DashedBorderBox";
import { BUSINESS } from "@/lib/constants";
import { formatPhone } from "@/lib/utils";

export function ContactCTA() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Service Inquiry from ${formState.name}`);
		const body = encodeURIComponent(
			`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
		);
		const mailtoUrl = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
		window.location.href = mailtoUrl;
		setSubmitted(true);
		setFormState({ name: "", email: "", message: "" });
	};

	return (
		<section id="contact" className="scroll-mt-24 bg-white py-16 sm:scroll-mt-28 sm:py-20 md:py-28">
			<Container>
				<DashedBorderBox variant="light">
					<div className="mb-10 text-center sm:mb-12">
						<p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-vfw-red-600">
							GET IN TOUCH
						</p>
						<h2 className="font-heading text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
							Visit Us or <span className="text-vfw-red-600">Get in Touch</span>
						</h2>
					</div>

					<div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
						<div>
							<ul className="mb-8 space-y-4">
								<li className="flex items-start gap-3">
									<MapPin className="mt-1 h-5 w-5 shrink-0 text-vfw-red-600" />
									<div>
										<p className="font-semibold text-black">{BUSINESS.address}</p>
										<p className="text-slate-700">
											{BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
										</p>
										<p className="text-sm text-slate-500">({BUSINESS.location})</p>
									</div>
								</li>
								<li>
									<a
										href={`tel:${formatPhone(BUSINESS.phone)}`}
										className="flex items-center gap-3 text-slate-700 transition-colors hover:text-vfw-red-600"
									>
										<Phone className="h-5 w-5 shrink-0 text-vfw-red-600" />
										<span className="font-semibold">{BUSINESS.phone}</span>
									</a>
								</li>
								<li>
									<a
										href={`mailto:${BUSINESS.email}`}
										className="flex items-center gap-3 text-slate-700 transition-colors hover:text-vfw-red-600"
									>
										<Mail className="h-5 w-5 shrink-0 text-vfw-red-600" />
										<span>{BUSINESS.email}</span>
									</a>
								</li>
								<li className="flex items-center gap-3 text-slate-700">
									<Clock className="h-5 w-5 shrink-0 text-vfw-red-600" />
									<span>
										{BUSINESS.hours.days}, {BUSINESS.hours.hours}
									</span>
								</li>
							</ul>

							{submitted ? (
								<div className="rounded-lg bg-green-50 p-5 text-center sm:p-6">
									<p className="text-lg font-semibold text-success">Your email draft is ready</p>
									<p className="mt-1 text-slate-700">
										Check your email app to send your message to us.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<label
											htmlFor="name"
											className="mb-1 block text-sm font-semibold text-charcoal"
										>
											Name
										</label>
										<input
											id="name"
											type="text"
											required
											value={formState.name}
											onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
											className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-charcoal outline-none transition-colors focus:border-vfw-red-600 focus:ring-1 focus:ring-vfw-red-600"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="mb-1 block text-sm font-semibold text-charcoal"
										>
											Email
										</label>
										<input
											id="email"
											type="email"
											required
											value={formState.email}
											onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
											className="w-full rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-charcoal outline-none transition-colors focus:border-vfw-red-600 focus:ring-1 focus:ring-vfw-red-600"
										/>
									</div>
									<div>
										<label
											htmlFor="message"
											className="mb-1 block text-sm font-semibold text-charcoal"
										>
											Message
										</label>
										<textarea
											id="message"
											required
											rows={4}
											value={formState.message}
											onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
											className="w-full resize-none rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-charcoal outline-none transition-colors focus:border-vfw-red-600 focus:ring-1 focus:ring-vfw-red-600"
										/>
									</div>
									<button
										type="submit"
										className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700 sm:w-auto"
									>
										Send Message
									</button>
								</form>
							)}
						</div>

						<div className="space-y-5 sm:space-y-6">
							<MapEmbed />
							<SocialLinks />
						</div>
					</div>
				</DashedBorderBox>
			</Container>
		</section>
	);
}
