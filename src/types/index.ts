import { MouseEventHandler } from "react";

export interface ButtonProps {
	title: string;
	type?: "submit" | "reset" | "button";
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}
