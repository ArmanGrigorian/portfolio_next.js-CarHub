import Image from "next/image";

const HeroImage = () => {
	return (
		<div className="hero__image">
			<Image className="object-contain" src={"/images/hero.png"} fill alt="hero logo" />
		</div>
	);
};

export { HeroImage };
