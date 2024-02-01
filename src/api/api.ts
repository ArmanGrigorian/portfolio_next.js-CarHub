import axios from "axios";

const instance = axios.create({
	baseURL: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
	headers: {
		"X-RapidAPI-Key": "abdd700650msh552974bad893c5fp1ceca0jsn702c512940c9",
		"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
   },
   params: { model: "corolla" },
});

export const carsAPI = {
	getAllCars: () => {
		return instance.get("");
	},
};
