import { FooterBottom, FooterLinks, Logo } from "../index";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="px-5 py-7 max-w-[1440px] mx-auto flex flex-col text-black-100 mt-5 border-t border-grey-100">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5">
				<div className="flex flex-col justify-start items-start gap-6">
					<Logo />

					<p className="text-base text-gray-700">
						Car Hub {currentYear} <br /> All rights reserved &copy;
					</p>
				</div>

				<FooterLinks />
			</div>

			<FooterBottom />
		</footer>
	);
};

export { Footer };
