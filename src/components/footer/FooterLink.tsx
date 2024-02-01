import Link from "next/link";
import { T_link } from "@/types";

const FooterLink = (link: T_link) => {
	return (
		<Link className="text-grey-500" href={link.url}>
			{link.title}
		</Link>
	);
};

export { FooterLink };
