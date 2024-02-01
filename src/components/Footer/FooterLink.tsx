import { T_link } from "@/types";
import Link from "next/link";

const FooterLink = (link: T_link) => {
	return (
		<div>
			<Link className="text-grey-500" href={link.url}>
				{link.title}
			</Link>
		</div>
	);
};

export {FooterLink};
