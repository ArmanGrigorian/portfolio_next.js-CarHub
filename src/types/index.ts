import { MouseEventHandler } from "react";

export interface I_Button {
	title: string;
	type?: "submit" | "reset" | "button";
	containerStyles?: string;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export type T_link = {
	title: string;
	url: string;
};

export type T_links = T_link[];

export type T_category = {
	title: string;
	links: T_links;
};
