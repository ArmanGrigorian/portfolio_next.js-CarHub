"use client";

import { I_Button } from "@/types";

const Button = ({ title, type, containerStyles, handleClick }: I_Button) => {
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
