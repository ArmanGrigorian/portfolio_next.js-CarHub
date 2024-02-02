import axios from "axios";

const instance = axios.create({
	baseURL: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
	headers: {
		"X-RapidAPI-Key": "abdd700650msh552974bad893c5fp1ceca0jsn702c512940c9",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
	},
	params: { model: "q3" },
});

export const carsAPI = {
	getAllCars: () => {
		return instance.get("");
	},
};

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
