"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { SearchButton, SearchManufacturer, SearchModel } from "..";
import { useRouter } from "next/navigation";

const SearchBar = () => {
	const [manufacturer, setManufacturer] = useState("");
	const [model, setModel] = useState("");
	const router = useRouter();

	function updateSearchParams(manufacturer: string, model: string) {
		const searchParams = new URLSearchParams(window.location.search);

		if (manufacturer) {
			searchParams.set("manufacturer", manufacturer);
		} else {
			searchParams.delete("manufacturer");
		}

		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}

		const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
		router.push(newPathname);
	}

	function handleSearch(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (manufacturer === "" && model === "") {
			return alert("Please fill in the search bar");
		}

		updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setModel(e.target.value);
	}

	return (
		<form className="searchBar" onSubmit={handleSearch}>
			<div className="searchBar__item">
				<SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
				<SearchButton otherClasses={"sm:hidden"} />
			</div>

			<div className="searchBar__item">
				<SearchModel model={model} handleChange={handleChange} />
				<SearchButton otherClasses={"sm:hidden"} />
			</div>
			<SearchButton otherClasses={"max-sm:hidden"} />
		</form>
	);
};

export { SearchBar };
