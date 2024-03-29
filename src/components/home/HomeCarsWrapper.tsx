import { getAllCars } from "@/api/api";
import { T_car, T_searchParams } from "@/types";
import { Card, ShowMore } from "..";


const HomeCarsWrapper = async (searchParams: T_searchParams) => {
	const allCars = await getAllCars(searchParams);

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
					<ShowMore
						limit={(searchParams.limit || 10) / 10}
						isNext={(searchParams.limit || 10) > allCars.length}
					/>
				</section>
			) : (
				<section className="mt-5">
					<h3 className="text-black text-xl font-bold">Oops, no results</h3>
				</section>
			)}
		</>
	);
};

export { HomeCarsWrapper };
