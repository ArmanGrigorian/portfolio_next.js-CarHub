import { FooterBottom, FooterTop } from "./index";

const Footer = () => {
	return (
		<footer className="px-5 max-w-[1440px] mx-auto flex flex-col text-black-100 mt-5 border-t border-grey-100">
			<FooterTop />
			<FooterBottom />
		</footer>
	);
};

export { Footer };
