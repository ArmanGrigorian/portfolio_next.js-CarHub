"use client";

import Image from "next/image";
import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "../../types/index";
import { ChangeEvent, Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
	const [query, setQuery] = useState("");

	const filteredManufacturers =
		query === ""
			? manufacturers
			: manufacturers.filter((manufacturer) =>
					manufacturer
						.toLowerCase()
						.replace(/\s+/g, "")
						.includes(query.toLowerCase().replace(/\s+/g, "")),
			  );

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		setQuery(e.target.value);
	}

	return (
		<div className="search-manufacturer">
			<Combobox value={manufacturer} onChange={setManufacturer}>
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
						className="search-manufacturer__input"
						placeholder="Volkswagen"
						displayValue={(manufacturer: string) => manufacturer}
						onChange={handleChange}
					/>

					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}>
						<Combobox.Options className="bg-gray-50 mt-4 max-h-48 overflow-y-auto">
							{filteredManufacturers.length === 0 && query !== "" ? (
								<Combobox.Option className="search-manufacturer__option" value={query}>
									Create &quot;{query}&quot;
								</Combobox.Option>
							) : (
								filteredManufacturers.map((manufacturer) => (
									<Combobox.Option
										className={({ active }) =>
											`search-manufacturer__option ${
												active ? "bg-primary-blue text-slate-100" : "text-gray-900"
											} `
										}
										key={crypto.randomUUID()}
										value={manufacturer}>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
													{manufacturer}
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

export { SearchManufacturer };
