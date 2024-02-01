import Link from "next/link";

const CopyrightsLink = () => {
	return (
		<div className="footer__copyrights-link">
			<Link className="text-gray-500" href="/">
				Privacy Policy
			</Link>
			<Link className="text-gray-500" href="/">
				Terms of Use
			</Link>
		</div>
	);
};

export {CopyrightsLink};
