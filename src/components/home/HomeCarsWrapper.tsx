import { carsAPI } from "@/api/api";
import { T_car } from "@/types";
import { Card } from "..";

const HomeCarsWrapper = async () => {
	const allCarsResponse = await carsAPI.getAllCars();
	const allCars = allCarsResponse.data;

	return (
		<>
			{allCars ? (
				<section className="mt-5">
					<h3 className="text-black text-xl font-bold">WE HAVE CARS</h3>

					<div className="home__cars-wrapper">
						{allCars.map((car: T_car) => (
							<Card key={crypto.randomUUID()} {...car} />
						))}
					</div>
				</section>
			) : (
				<section className="mt-5">
					<h3 className="text-black text-xl font-bold">Oops, no results</h3>
                  <p>Status: {allCarsResponse.status}</p>
				</section>
			)}
		</>
	);
};

export { HomeCarsWrapper };
