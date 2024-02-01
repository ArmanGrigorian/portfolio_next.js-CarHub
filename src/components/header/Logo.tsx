import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link className="flex justify-center items-center" href="/">
			<Image
				className="object-contain"
				src="/images/logo.svg"
				width={180}
				height={18}
				alt="Car Hub Logo"
			/>
		</Link>
	);
};

export {Logo};
