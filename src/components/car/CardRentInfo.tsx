const CardRentInfo = ({ carRent }: { carRent: string }) => {
	return (
		<p className="flex mt-6 text-2xl font-bold">
			<sup className="self-start text-base font-semibold text-green-600">&#36;</sup>
			{carRent}
			<sub className="self-end text-base font-semibold">/day</sub>
		</p>
	);
};

export { CardRentInfo };
