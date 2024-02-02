"use client";

import { T_car } from "@/types";
import { calculateCarRent } from "@/utils/calculateCarRent";
import { useState } from "react";
import { CardImage, CardInfo, CardRentInfo, CardTitle, DetailsModal } from "..";

const Card = (car: T_car) => {
	const { make, model, city_mpg, year, transmission, drive } = car;
	const carRent = calculateCarRent(city_mpg, year);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleModal() {
		setIsOpen((prevOpen) => !prevOpen);
	}

	return (
		<div className="car-card group shadow-lg">
			<CardTitle make={make} model={model} />
			<CardRentInfo carRent={carRent} />
			<CardImage year={year} model={model} make={make} />
			<CardInfo
				transmission={transmission}
				drive={drive}
				city_mpg={city_mpg}
				handleOpen={handleModal}
			/>
			<DetailsModal isOpen={isOpen} closeModal={handleModal} car={car} />
		</div>
	);
};

export { Card };
