"use client";

import { useRouter } from "next/navigation";
import { CustomButton } from "..";
import { updateSearchParams } from "@/utils/updateSearchParams";

const ShowMore = ({ limit, isNext }: { limit: number; isNext: boolean }) => {
	const router = useRouter();

	function handleNavigation() {
		const newLimit = (limit + 1) * 10;
		const newPathName = updateSearchParams("limit", `${newLimit}`);
		router.push(newPathName, { scroll: false });
	}

	return (
		<div className="w-full flex-center gap-5 mt-5">
			{!isNext && (
				<CustomButton
					title="Show More"
					type="button"
					containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
				/>
			)}
		</div>
	);
};

export { ShowMore };
