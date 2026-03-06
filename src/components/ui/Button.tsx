import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
	primary: "bg-vfw-red-600 text-white hover:bg-vfw-red-700 active:bg-vfw-red-800",
	secondary: "bg-vfw-navy-700 text-white hover:bg-vfw-navy-800 active:bg-vfw-navy-900",
	ghost: "bg-transparent text-charcoal hover:bg-gray-100",
	outline: "bg-transparent border-2 border-current hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
	sm: "px-4 py-2.5 text-sm",
	md: "px-5 py-3 text-sm sm:px-6 sm:text-base",
	lg: "px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg",
};

export function Button({
	variant = "primary",
	size = "md",
	className,
	href,
	children,
	...props
}: ButtonProps) {
	const classes = cn(
		"inline-flex min-h-[48px] items-center justify-center rounded-full text-center font-semibold uppercase leading-tight tracking-[0.18em] transition-colors duration-300 cursor-pointer sm:tracking-wider",
		variantStyles[variant],
		sizeStyles[size],
		className,
	);

	if (href) {
		return (
			<a href={href} className={classes}>
				{children}
			</a>
		);
	}

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
}
