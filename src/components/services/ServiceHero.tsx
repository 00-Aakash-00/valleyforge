import Image from "next/image";

export function ServiceHero({
	title,
	tagline,
	description,
	backgroundImage,
}: {
	title: string;
	tagline?: string;
	description?: string;
	backgroundImage?: string;
}) {
	return (
		<section className="relative flex min-h-[60vh] items-center bg-vfw-navy-900">
			{backgroundImage && (
				<Image
					src={backgroundImage}
					alt=""
					aria-hidden="true"
					fill
					priority
					sizes="100vw"
					className="object-cover"
				/>
			)}
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
				<h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
					{title}
				</h1>
				{tagline && (
					<p className="mt-4 font-heading text-xl italic text-vfw-red-600 sm:text-2xl">{tagline}</p>
				)}
				{description && (
					<p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{description}</p>
				)}
			</div>
		</section>
	);
}
