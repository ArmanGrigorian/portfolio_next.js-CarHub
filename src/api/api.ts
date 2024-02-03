import { T_searchParams } from "@/types";

export async function getAllCars(searchParams: T_searchParams) {
	const options: T_searchParams = {
		make: searchParams.make || " ",
		model: searchParams.model || " ",
		year: searchParams.year,
		limit: searchParams.limit || 10,
		fuel: searchParams.fuel || " ",
	};

	const { make, model, year, limit, fuel } = options;

	const params = `make=${make}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`;

	const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${params}`;

	const headers = {
		"X-RapidAPI-Key": "abdd700650msh552974bad893c5fp1ceca0jsn702c512940c9",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	};

	const req = await fetch(url, {
		headers: headers,
	});
	const res = await req.json();
	return res;
}

export function generateCarImageURL(make: string, model: string, year: number, angle?: string) {
	const url = new URL("https://cdn.imagin.studio/getimage");

	url.searchParams.append("customer", "hrjavascript-mastery");
	// url.searchParams.append("customer", process.env.NEXT_PUBLIC_IMAGIN_API_KEY || "");

	url.searchParams.append("make", make);
	url.searchParams.append("modelFamily", model.split(" ")[0]);
	url.searchParams.append("zoomType", "fullscreen");
	url.searchParams.append("modelYear", `${year}`);
	// url.searchParams.append('zoomLevel', zoomLevel);
	url.searchParams.append("angle", `${angle}`);

	return `${url}`;
}
