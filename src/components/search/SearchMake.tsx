"use client";

import Image from "next/image";
import { manufacturers } from "@/constants";
import { SearchMakeProps } from "../../types/index";
import { ChangeEvent, Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

const SearchMake = ({ make, setMake }: SearchMakeProps) => {
	const [query, setQuery] = useState("");

	const filteredMakes =
		query === ""
			? manufacturers
			: manufacturers.filter((make) =>
					make.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")),
			  );

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setQuery(e.target.value);
	}

	return (
		<div className="search-make">
			<Combobox value={make} onChange={setMake}>
				<div className="relative w-full">
					<Combobox.Button className="absolute top-[14px]">
						<Image
							className="ml-4"
							src="/images/car-logo.svg"
							width={20}
							height={20}
							alt="car logo svg"
						/>
					</Combobox.Button>
					<Combobox.Input
						className="search-make__input"
						placeholder="Volkswagen"
						displayValue={(make: string) => make}
						onChange={handleChange}
					/>

					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}>
						<Combobox.Options className="bg-gray-50 mt-4 max-h-48 overflow-y-auto">
							{filteredMakes.length === 0 && query !== "" ? (
								<Combobox.Option className="search-make__option" value={query}>
									Create &quot;{query}&quot;
								</Combobox.Option>
							) : (
								filteredMakes.map((make) => (
									<Combobox.Option
										className={({ active }) =>
											`search-make__option ${
												active ? "bg-primary-blue text-slate-100" : "text-gray-900"
											} `
										}
										key={crypto.randomUUID()}
										value={make}>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
													{make}
												</span>
												{selected && (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active ? "text-white" : "text-teal-600"
														}`}></span>
												)}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export { SearchMake };
