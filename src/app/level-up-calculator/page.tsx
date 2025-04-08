"use client";

import { useCallback, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import LevelUpCalculator, { LevelUpCost } from "@/components/LevelUpCalculator";
import PossibleLevelUpsCalculator from "@/components/PossibleLevelUpsCalculator";

export default function Page() {
	const [userCoins, setUserCoins] = useState<number>(0);
	const [userPowerPoints, setUserPowerPoints] = useState<number>(0);
	const [levelUpCost, setLevelUpCost] = useState<LevelUpCost>({
		coins: 0,
		powerPoints: 0,
	});
	const handleLevelUpCostChange = useCallback((cost: LevelUpCost) => {
		setLevelUpCost(cost);
	}, []);

	return (
		<main>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle className="text-xl text-center font-bold">
						<h1>Level up calculator</h1>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<LevelUpCalculator
						onLevelUpCostChange={handleLevelUpCostChange}
					/>
				</CardContent>
			</Card>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle className="text-l text-center font-bold">
						<h2>
							How many brawlers can you afford to upgrade with
							that configuration?
						</h2>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<PossibleLevelUpsCalculator
						userCoins={userCoins}
						userPowerPoints={userPowerPoints}
						levelUpCost={levelUpCost}
						onCoinsChange={(coins) => setUserCoins(coins)}
						onPowerPointsChange={(powerPoints) =>
							setUserPowerPoints(powerPoints)
						}
					/>
				</CardContent>
			</Card>
		</main>
	);
}
