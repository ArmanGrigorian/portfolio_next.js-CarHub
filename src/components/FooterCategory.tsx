import { T_category, T_link } from "@/types";
import { FooterLink } from "./index";

const FooterCategory = (category: T_category) => {
	return (
		<div className="footer__category" key={category.title}>
			<h3 className="font-bold select-none">{category.title}</h3>

			{category.links.map((link: T_link) => {
				return <FooterLink key={link.title} {...link} />;
			})}
		</div>
	);
};

export { FooterCategory };
