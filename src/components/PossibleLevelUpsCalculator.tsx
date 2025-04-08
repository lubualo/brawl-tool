import { Input } from "@/components/ui/input";
import Image from "next/image";
import { LevelUpCost } from "./LevelUpCalculator";

export type PossibleLevelUpsCalculatorProps = {
	userCoins: number; // User's available coins
	userPowerPoints: number; // User's available power points
	levelUpCost: LevelUpCost; // Cost to level up a single brawler
	onCoinsChange: (coins: number) => void; // Callback for updating user's coins
	onPowerPointsChange: (powerPoints: number) => void; // Callback for updating user's power points
};

export default function PossibleLevelUpsCalculator({
	userCoins,
	userPowerPoints,
	levelUpCost,
	onCoinsChange,
	onPowerPointsChange,
}: PossibleLevelUpsCalculatorProps) {
	const calculatePossibleUpgrades = (): number => {
		if (levelUpCost.coins === 0 || levelUpCost.powerPoints === 0) return 0;
		const coinsUpgrades = Math.floor(userCoins / levelUpCost.coins);
		const powerPointsUpgrades = Math.floor(
			userPowerPoints / levelUpCost.powerPoints
		);
		return Math.min(coinsUpgrades, powerPointsUpgrades);
	};

	return (
		<>
			<div className="flex w-full pb-4">
				<div className="basis-1/2 text-center">
					<div className="text-sm font-bold pb-1">Coins</div>
					<div className="flex items-center justify-center text-l">
						<Input
							type="number"
							placeholder="Your coins"
							max={1000000}
							min={0}
							onChange={(e) =>
								onCoinsChange(Number(e.target.value))
							}
						/>
						<Image
							src="/coin-icon.svg"
							alt="Coins icon"
							width={16}
							height={16}
							className="ml-2"
						/>
					</div>
				</div>
				<div className="basis-1/2 text-center">
					<div className="text-sm font-bold pb-1">Power points</div>
					<div className="flex items-center justify-center text-l">
						<Input
							type="number"
							placeholder="Your power points"
							max={1000000}
							min={0}
							onChange={(e) =>
								onPowerPointsChange(Number(e.target.value))
							}
						/>
						<Image
							src="/power-point-icon.svg"
							alt="Power points icon"
							width={16}
							height={16}
							className="ml-2"
						/>
					</div>
				</div>
			</div>
			<div>
				You can upgrade <strong> {calculatePossibleUpgrades()} brawler</strong> with that config.
			</div>
		</>
	);
}
