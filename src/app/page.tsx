import { Hero, Catalog  } from "@/components/index";

export default function HomePage() {
	return (
		<main className="overflow-hidden max-width">
			<Hero />
			<Catalog />
		</main>
	);
}
