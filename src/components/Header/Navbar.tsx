import { Button } from "..";
import { Logo } from "../index";

const Navbar = () => {
	return (
		<nav className="max-w-[1440px] mx-auto flex justify-between items-center">
			<Logo />

			<Button
				title="Sign In"
				type="button"
				containerStyles="text-primary-blue rounded-full bg-slate-100 min-w-[130px]"
			/>
		</nav>
	);
};

export { Navbar };
