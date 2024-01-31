"use client";

import { ButtonProps } from "@/types";

const Button = ({ title, type, containerStyles, handleClick }: ButtonProps) => {
	return (
		<button
			className={`custom-btn ${containerStyles}`}
			type={type || "button"}
			disabled={false}
			onClick={handleClick}>
			<span className={`flex-1 font-semibold`}>{title}</span>
		</button>
	);
};

export { Button };
