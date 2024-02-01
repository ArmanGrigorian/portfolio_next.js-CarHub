import { CustomFilter } from "..";

const HomeFilterContainer = () => {
	return (
		<div className="home__filter-container">
			<CustomFilter title="fuel" />
			<CustomFilter title="year" />
		</div>
	);
};

export { HomeFilterContainer };
