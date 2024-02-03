import { Catalog, Hero } from "@/components/index";
import { T_searchParams } from "@/types";

export default function HomePage({ searchParams }: { searchParams: T_searchParams }) {
	return (
		<main className="overflow-hidden max-width">
			<Hero />
			<Catalog {...searchParams} />
		</main>
	);
}
