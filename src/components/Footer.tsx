import Image from "next/image";

const Footer = () => {
	return (
		<footer className="flex flex-col text-black-100 mt-5 border-t border-grey-100">
			<div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
				<div className="flex flex-col justify-start items-start gap-6">
					<Image
						className="object-contain"
						src="/images/logo.svg"
						width={118}
						height={18}
						alt="Car Hub Logo"
					/>
					<p className="text-base text-gray-700">
						Car Hub 2024 <br /> All rights reserved &copy;
					</p>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
