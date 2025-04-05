import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import TrophyCalculator from "@/components/TrophyCalculator";

export default function Home() {
	return (
		<main>
			<Card className="w-[350px]">
				<CardHeader >
					<CardTitle className="flex text-xl text-center font-bold">
						Brawl Stars trophies calculator
					</CardTitle>
				</CardHeader>
				<CardContent>
					<TrophyCalculator />
				</CardContent>
			</Card>
		</main>
	);
}
