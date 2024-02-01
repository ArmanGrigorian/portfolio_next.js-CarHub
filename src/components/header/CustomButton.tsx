"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
	title,
	type,
	containerStyles,
	textStyles,
	isDisabled,
	rightIcon,
	handleClick,
}: CustomButtonProps) => {
	return (
		<button
			className={`custom-btn ${containerStyles}`}
			type={type || "button"}
			disabled={isDisabled}
			onClick={handleClick}>
			<span className={`flex-1 font-semibold ${textStyles}`}>{title}</span>
			{rightIcon && (
				<div className="relative w-6 h-6">
					<Image className="object-contain" src={rightIcon} fill alt="right icon" />
				</div>
			)}
		</button>
	);
};

export { CustomButton };
