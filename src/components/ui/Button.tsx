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
	sm: "px-4 py-2 text-sm",
	md: "px-6 py-3 text-base",
	lg: "px-8 py-4 text-lg",
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
		"inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-wider transition-colors duration-300 min-h-[48px] cursor-pointer",
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
