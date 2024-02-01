import Link from "next/link";

const FooterBottom = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 py-10">
			<p>@{currentYear} CarHub. All Rights Reserved</p>

			<div className="footer__copyrights-link">
				<Link className="text-gray-500" href="/">
					Privacy Policy
				</Link>
				<Link className="text-gray-500" href="/">
					Terms of Use
				</Link>
			</div>
		</div>
	);
};

export { FooterBottom };
