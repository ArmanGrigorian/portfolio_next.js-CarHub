import { HomeCarsWrapper, HomeFilters, HomeTextContainer } from "..";

const Catalog = () => {
	return (
		<div className="mt-12 px-5 py-5 max-width" id="discover">
			<HomeTextContainer />
			<HomeFilters />
			<HomeCarsWrapper />
		</div>
	);
};

export { Catalog };
