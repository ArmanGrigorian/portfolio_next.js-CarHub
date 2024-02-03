"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { SearchButton, SearchMake, SearchModel } from "..";

const SearchBar = () => {
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");
	const router = useRouter();

	function updateSearchParams(make: string, model: string) {
		const searchParams = new URLSearchParams(window.location.search);

		if (make) {
			searchParams.set("make", make);
		} else {
			searchParams.delete("make");
		}

		if (model) {
			searchParams.set("model", model);
		} else {
			searchParams.delete("model");
		}

		const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
		router.push(newPathname, { scroll: false });
	}

	function handleSearch(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (make === "" && model === "") {
			return alert("Please fill in the search bar");
		}

		updateSearchParams(make.toLowerCase(), model.toLowerCase());
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setModel(e.target.value);
	}

	return (
		<form className="searchBar" onSubmit={handleSearch}>
			<div className="searchBar__item">
				<SearchMake make={make} setMake={setMake} />
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
