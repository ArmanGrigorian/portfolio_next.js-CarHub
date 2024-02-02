import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
   return (
			<button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
				<Image className="object-contain" src={"/images/magnifying-glass.svg"} width={40} height={40} alt="magnifying glass svg" />
			</button>
		);
};

export { SearchButton };
