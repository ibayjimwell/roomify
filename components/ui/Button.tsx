import React from "react";

export type ButtonVariant = "primary" | "secondary" | string;
export type ButtonSize = "sm" | "md" | "lg" | string;

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	fullWidth?: boolean;
	className?: string;
}

export default function Button({
	variant = "primary",
	size = "md",
	fullWidth = false,
	className,
	children,
	...rest
}: ButtonProps) {
	const classes = [
		"btn",
		`btn--${variant}`,
		`btn--${size}`,
		fullWidth ? "btn--fullWidth" : "",
		className || "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<button className={classes} {...rest}>
			{children}
		</button>
	);
}

