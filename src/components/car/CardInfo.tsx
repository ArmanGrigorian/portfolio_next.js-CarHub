import { CardInfoProps } from "@/types";
import Image from "next/image";
import { CustomButton } from "..";

const CardInfo = ({ transmission, drive, city_mpg, handleOpen }: CardInfoProps) => {
	return (
		<div className="relative flex w-full mt-2">
			<div className="flex justify-between text-gray group-hover:invisible w-full">
				<div className="flex flex-col justify-center items-center gap-2">
					<Image
						src="/images/steering-wheel.svg"
						width={20}
						height={20}
						alt="steering wheel image"
					/>
					<p className="text-sm">{transmission === "a" ? "Automatic" : "Manual"}</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-2">
					<Image src="/images/tire.svg" width={20} height={20} alt="tire image" />
					<p className="text-sm">{drive.toUpperCase()}</p>
				</div>
				<div className="flex flex-col justify-center items-center gap-2">
					<Image src="/images/gas.svg" width={20} height={20} alt="gas image" />
					<p className="text-sm">{city_mpg} MPG</p>
				</div>
			</div>
			<div className="car-card__btn-container">
				<CustomButton
					title="View More"
					containerStyles="w-full py-4 rounded-full bg-primary-blue"
					textStyles="text-white text-sm font-bold"
					rightIcon="/images/right-arrow.svg"
					handleClick={handleOpen}
				/>
			</div>
		</div>
	);
};

export { CardInfo };
