"use client";

import Image from "next/image";
import { Button } from "./Button";

const Hero = () => {
	function handleScroll() {
		console.log("click");
	}

	return (
		<div className="hero">
			<div className="flex-1 pt-36 pl-14">
				<h1 className="hero__title">Find, book, or rent a car — quickly and easily!</h1>
				<p className="hero__subtitle">
					Streamline your car rental experience with our effortless booking process
				</p>

				<Button
					title="Explore Cars"
					type="button"
					containerStyles="bg-primary-blue text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
			</div>

			<div className="hero__image-container">
				<div className="hero__image">
					<Image className="object-contain" src={"/images/hero.png"} fill alt="hero logo" />

					<div className="hero__image-overlay" />
				</div>
			</div>
		</div>
	);
};

export { Hero };
