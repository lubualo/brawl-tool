import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LevelUpCalculator from "@/components/LevelUpCalculator";

export default function Page() {
	return (
		<main>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle className="text-xl text-center font-bold">
						<h1>Level up calculator</h1>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<LevelUpCalculator/>
				</CardContent>
			</Card>
		</main>
	);
}
