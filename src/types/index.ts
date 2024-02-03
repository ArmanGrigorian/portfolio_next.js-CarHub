import { MouseEventHandler } from "react";

export type CustomButtonProps = {
	title: string;
	type?: "submit" | "reset" | "button";
	containerStyles?: string;
	textStyles?: string;
	rightIcon?: string;
	isDisabled?: boolean;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type T_link = {
	title: string;
	url: string;
};

export type T_links = T_link[];

export type T_category = {
	title: string;
	links: T_links;
};

export type SearchMakeProps = {
	make: string;
	setMake: (make: string) => void;
};

export type T_car = {
	city_mpg: number;
	class: string;
	combination_mpg: number;
	cylinders: number;
	displacement: number;
	drive: string;
	fuel_type: string;
	highway_mpg: number;
	make: string;
	model: string;
	transmission: string;
	year: number;
};

export type DetailsModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	car: T_car;
};

export type CardImageProps = {
	year: number;
	make: string;
	model: string;
};

export type CardInfoProps = {
	transmission: string;
	drive: string;
	city_mpg: number;
	handleOpen: () => void;
};

export type T_filters = {
	make: string;
	model: string;
	year: number;
	fuel: string;
	limit: number;
};

export type T_searchParams = {
	make?: string;
	model?: string;
	year?: number;
	limit?: number;
	fuel?: string;
};

export type OptionProps = {
	title: string;
	value: string;
};

export type CustomFilterProps = {
	title: string;
	options: OptionProps[];
};
