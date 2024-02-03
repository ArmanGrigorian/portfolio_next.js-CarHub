"use client";

import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils/updateSearchParams";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
	const [selected, setSelected] = useState(options[0]);
	const router = useRouter();

	function handleUpdateParams(e: { title: string; value: string }) {
		const newPathName = updateSearchParams(title, e.value.toLowerCase());
		router.push(newPathName, { scroll: false });
	}

	function handleSelect(e: { title: string; value: string }) {
		setSelected(e);
		handleUpdateParams(e);
	}

	return (
		<div className="w-fit">
			<Listbox value={selected} onChange={handleSelect}>
				<div className="relative w-fit z-10">
					<Listbox.Button className="custom-filter__btn">
						<span className="block truncate">{selected.title}</span>
						<Image
							className="ml-4 object-contain"
							src="/images/chevron-up-down.svg"
							width={20}
							height={20}
							alt="up-down chevron svg"
						/>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<Listbox.Options className="custom-filter__options">
							{options.map((option) => (
								<Listbox.Option
									className={({ active }) =>
										`relative cursor-default select-none py-2 px-4 z-10 ${
											active ? "bg-primary-blue text-white" : "text-gray-900"
										}`
									}
									key={option.title}
									value={option}>
									{({ selected }) => (
										<span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
											{option.title}
										</span>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export { CustomFilter };
