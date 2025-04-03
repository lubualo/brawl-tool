import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@components/ui/card";
import Image from "next/image";
import TrophyCalculator from "@components/TrophyCalculator";

export default function Home() {
	return (
		<main>
			<Card className="w-[350px]">
				<CardHeader >
					<CardTitle className="flex items-center gap-2 whitespace-nowrap">
					<Image
						src="/calc-icon.png"
						alt="Calculator Icon"
						width={24}
						height={24}
						className="inline-block"
					/>
					<span>Brawl Stars trophies calculator</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<TrophyCalculator />
				</CardContent>
			</Card>
		</main>
	);
}
