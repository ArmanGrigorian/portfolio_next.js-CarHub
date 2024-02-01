"use client";

import { I_CustomButton } from "@/types";

const CustomButton = ({ title, type, containerStyles, handleClick }: I_CustomButton) => {
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

export { CustomButton };
