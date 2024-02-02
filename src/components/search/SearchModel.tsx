import Image from "next/image";
import { ChangeEvent } from "react";

const SearchModel = ({
	model,
	handleChange,
}: {
	model: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
	return (
		<>
			<Image
				className="absolute w-5 h-5 ml-4"
				src="/images/model-icon.png"
				width={25}
				height={25}
				alt="model icon png"
			/>
			<input
				className="searchBar__input"
				type="text"
				name="model"
				value={model}
				onChange={handleChange}
				placeholder="Tiguan"
			/>
		</>
	);
};

export { SearchModel };
