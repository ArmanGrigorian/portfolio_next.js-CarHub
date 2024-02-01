import { HomeFilterContainer, SearchBar } from "..";

const HomeFilters = () => {
	return (
		<div className="home__filters">
			<SearchBar />
			<HomeFilterContainer />
		</div>
	);
};

export { HomeFilters };
