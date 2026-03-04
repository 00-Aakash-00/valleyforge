import { Container } from "@/components/ui/Container";

export default function NotFound() {
	return (
		<div className="flex min-h-[60vh] items-center justify-center pt-20">
			<Container className="text-center">
				<p className="font-heading text-lg font-bold text-vfw-red-600">Valley Forge Weaponry</p>
				<h1 className="mt-4 font-heading text-5xl font-extrabold text-black md:text-6xl">
					Page Not Found
				</h1>
				<p className="mt-4 text-lg text-slate-500">
					The page you&apos;re looking for doesn&apos;t exist or has been moved.
				</p>
				<a
					href="/"
					className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-vfw-red-600 px-8 py-3 font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vfw-red-700"
				>
					Return to Homepage
				</a>
			</Container>
		</div>
	);
}
