"use client";

import { HeroImageContainer, HeroLeft } from "./index";

const Hero = () => {
	return (
		<div className="hero px-5">
			<HeroLeft />
			<HeroImageContainer />
		</div>
	);
};

export { Hero };
