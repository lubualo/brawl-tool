import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@components/ui/card";

import TrophyCalculator from "@components/TrophyCalculator";

export default function Home() {
	return (
		<main>
			<h1>Brawl Tool win streak Calculator</h1>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>
						Deploy your new project in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<TrophyCalculator />
				</CardContent>
			</Card>
		</main>
	);
}
