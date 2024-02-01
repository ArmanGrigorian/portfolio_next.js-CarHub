import { AllRightsReserved, CopyrightsLink } from "../index";

const FooterBottom = () => {
	return (
		<div className="flex justify-between items-center flex-wrap border-t border-gray-100 py-8">
			<AllRightsReserved />
			<CopyrightsLink />
		</div>
	);
};

export { FooterBottom };
