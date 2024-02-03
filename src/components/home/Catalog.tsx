import { T_searchParams } from "@/types";
import { HomeCarsWrapper, HomeFilters, HomeTextContainer } from "..";

const Catalog = (searchParams: T_searchParams) => {
	return (
		<div className="mt-12 px-5 py-5 max-width" id="discover">
			<HomeTextContainer />
			<HomeFilters />
			<HomeCarsWrapper {...searchParams} />
		</div>
	);
};

export { Catalog };
