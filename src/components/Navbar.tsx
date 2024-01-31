import Image from "next/image";
import Link from "next/link";
import { Button } from ".";

const Navbar = () => {
	return (
		<nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-14 px-6 py-4">
			<Link className="flex justify-center items-center" href="/">
				<Image
					className="object-contain"
					src="/images/logo.svg"
					width={180}
					height={18}
					alt="Car Hub Logo"
				/>
			</Link>

			<Button title="Sign In" type="button" containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"/>
		</nav>
	);
};

export { Navbar };
