import { CustomButton } from "..";

const HeroLeft = () => {
	function handleScroll() {
		console.log("click");
	}

	return (
		<div className="flex-1 pt-36 ">
			<h1 className="hero__title">Find, book, or rent a car — quickly and easily!</h1>
			<p className="hero__subtitle">
				Streamline your car rental experience with our effortless booking process
			</p>

			<CustomButton
				title="Explore Cars"
				type="button"
				containerStyles="bg-primary-blue text-white rounded-full mt-10"
				handleClick={handleScroll}
			/>
		</div>
	);
};

export { HeroLeft };
