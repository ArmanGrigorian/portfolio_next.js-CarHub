"use client";

import { generateCarImageURL } from "@/api/api";
import { DetailsModalProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

const DetailsModal = ({ isOpen, closeModal, car }: DetailsModalProps) => {
	const { make, model, year } = car;

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-300"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full  justify-center items-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="relative w-full max-w-lg max-h-[94vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-6">
									<button
										className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
										type="button"
										onClick={closeModal}>
										<Image
											className="object-contain"
											src="/images/close.svg"
											width={20}
											height={20}
											alt="close icon"
										/>
									</button>

									<div className="flex-1 flex flex-col gap-3">
										<div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
											<Image
												className="object-contain"
												priority
												src={generateCarImageURL(make, model, year)}
												fill
												alt={`${year} ${make} ${model} image`}
											/>
										</div>

										<div className="flex gap-3">
											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													className="object-contain"
													priority
													src={generateCarImageURL(make, model, year, "29")}
													fill
													alt={`${year} ${make} ${model} image`}
												/>
											</div>

											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													className="object-contain"
													priority
													src={generateCarImageURL(make, model, year, "33")}
													fill
													alt={`${year} ${make} ${model} image`}
												/>
											</div>

											<div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
												<Image
													className="object-contain"
													priority
													src={generateCarImageURL(make, model, year, "13")}
													fill
													alt={`${year} ${make} ${model} image`}
												/>
											</div>
										</div>
									</div>

									<div className="flex flex-1 flex-col gap-2">
										<h3 className="font-semibold text-xl capitalize">
											{make} {model}
										</h3>

										<div className="mt-3 flex flex-wrap gap-4">
											{Object.entries(car).map(([key, value]) => {
												return (
													<div
														className="flex justify-between items-center gap-5 w-full text-right"
														key={crypto.randomUUID()}>
														<h4 className="text-grey capitalize">{key.split("_").join(" ")}</h4>
														<p className="text-black-100 font-semibold">{value}</p>
													</div>
												);
											})}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export { DetailsModal };
