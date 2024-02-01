const CardTitle = ({ make, model }: { make: string; model: string }) => {
	return (
		<div className="car-card__content">
			<h3 className="car-card__content-title">
				{make} {model}
			</h3>
		</div>
	);
};

export { CardTitle };
