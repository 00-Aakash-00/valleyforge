import { Container } from "@/components/ui/Container";

export default function NotFound() {
	return (
		<div className="flex min-h-[60vh] items-center justify-center px-4 pt-24 sm:px-0">
			<Container className="text-center">
				<p className="font-heading text-lg font-bold text-vfw-red-600">Valley Forge Weaponry</p>
				<h1 className="mt-4 font-heading text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
					Page Not Found
				</h1>
				<p className="mt-4 text-lg text-slate-500">
					The page you&apos;re looking for doesn&apos;t exist or has been moved.
				</p>
				<a
					href="/"
					className="mt-8 inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700 sm:w-auto"
				>
					Return to Homepage
				</a>
			</Container>
		</div>
	);
}
