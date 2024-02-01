import { FooterLinks, Logo } from "./index";

const FooterTop = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="flex max-md:flex-col flex-wrap justify-between gap-5 py-10">
			<div className="flex flex-col justify-start items-start gap-6">
				<Logo />

				<p className="text-base text-gray-700">
					Car Hub {currentYear} <br /> All rights reserved &copy;
				</p>
			</div>

			<FooterLinks />
		</div>
	);
};

export { FooterTop };
