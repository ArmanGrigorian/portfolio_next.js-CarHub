import { fuels, yearsOfProduction } from "@/constants";
import { CustomFilter } from "..";

const HomeFilterContainer = () => {
	return (
		<div className="home__filter-container">
			<CustomFilter title="fuel" options={fuels} />
			<CustomFilter title="year" options={yearsOfProduction} />
		</div>
	);
};

export { HomeFilterContainer };
