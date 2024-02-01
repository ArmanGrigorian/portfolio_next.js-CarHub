import { footerLinks } from "@/constants";
import { T_category } from "@/types";
import { FooterCategory } from "./index";

const FooterLinks = () => {
	return (
		<div className="footer__links">
			{footerLinks.map((category: T_category) => (
				<FooterCategory key={category.title} {...category} />
			))}
		</div>
	);
};

export { FooterLinks };
