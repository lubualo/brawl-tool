"use client";

import { useState } from "react";
import LevelSelector from "@/components/LevelSelector";
import { Separator } from "@/components/ui/separator";
import { LevelIUpCalculatorService } from "@/utils/LevelIUpCalculatorService";
import Image from "next/image";

export default function LevelUpCalculator() {
	const starPowerCost = 2000;
	const gadgetCost = 1000;

	const [initialLevel, setInitialLevel] = useState(1);
	const [targetLevel, setTargetLevel] = useState(11);
	const [starPowers, setStarPowers] = useState(0);
	const [gadgets, setGadgets] = useState(0);

	return (
		<>
			<div className="flex w-full pb-4">
				<div className="basis-1/2">
					<div className="text-sm text-center font-bold pb-1">
						Initial level
					</div>
					<LevelSelector
						level={initialLevel}
						onLevelChange={(newLevel: number) =>
							setInitialLevel(newLevel)
						}
						min={1}
						max={targetLevel - 1}
					/>
				</div>
				<div className="basis-1/2">
					<div className="text-sm text-center font-bold pb-1">
						Target level
					</div>
					<LevelSelector
						level={targetLevel}
						onLevelChange={(newLevel: number) =>
							setTargetLevel(newLevel)
						}
						min={initialLevel + 1}
						max={11}
					/>
				</div>
			</div>
			<div className="flex w-full pb-4">
				<div className="basis-1/2">
					<div className="flex items-center justify-center text-sm font-bold pb-1">
						Star powers
						<Image
							src="/star-power-icon.png"
							alt="Coins icon"
							width={16}
							height={16}
							className="ml-2"
						/>
					</div>
					<LevelSelector
						level={starPowers}
						onLevelChange={(newLevel: number) =>
							setStarPowers(newLevel)
						}
						min={0}
						max={2}
					/>
				</div>
				<div className="basis-1/2">
					<div className="flex items-center justify-center text-sm font-bold pb-1">
						Gadgets
						<Image
							src="/gadget-icon.png"
							alt="Coins icon"
							width={16}
							height={16}
							className="ml-2"
						/>
					</div>
					<LevelSelector
						level={gadgets}
						onLevelChange={(newLevel: number) =>
							setGadgets(newLevel)
						}
						min={0}
						max={2}
					/>
				</div>
			</div>
			<Separator className="mb-4" />
			<div className="flex w-full pb-4">
				<div className="basis-1/2 text-center">
					<div className="text-sm font-bold pb-1">Coins</div>
					<div className="flex items-center justify-center text-l">
						{LevelIUpCalculatorService.calculateCoinCost(
							initialLevel,
							targetLevel
						) +
							starPowers * starPowerCost +
							gadgets * gadgetCost}
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
						{LevelIUpCalculatorService.calculatePowerPoints(
							initialLevel,
							targetLevel
						)}
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
		</>
	);
}
