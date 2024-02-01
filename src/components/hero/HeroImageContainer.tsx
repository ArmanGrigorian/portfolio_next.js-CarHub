import { HeroImage, HeroImageOverlay } from "..";

const HeroImageContainer = () => {
	return (
		<div className="hero__image-container">
			<HeroImage />
			<HeroImageOverlay />
		</div>
	);
};

export { HeroImageContainer };
