import Image from "next/image";

interface ServiceScrollCardProps {
	name: string;
	description: string;
	imageSrc: string;
	index: number;
}

export function ServiceScrollCard({ name, description, imageSrc, index }: ServiceScrollCardProps) {
	return (
		<div className="group w-[300px] sm:w-[340px]">
			{/* Image block */}
			<div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-gradient-to-br from-vfw-navy-800 to-charcoal">
				<Image
					src={imageSrc}
					alt={name}
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
					sizes="(min-width: 640px) 340px, 300px"
				/>
				{/* Numbered badge */}
				<span className="absolute top-3 left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-vfw-red-600 text-sm font-bold text-white">
					{String(index + 1).padStart(2, "0")}
				</span>
			</div>

			{/* Text area */}
			<div className="pt-4">
				<h3 className="font-heading text-lg font-bold text-black">{name}</h3>
				<p className="mt-1 line-clamp-2 text-sm text-slate-500">{description}</p>
			</div>
		</div>
	);
}
