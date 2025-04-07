"use client";

import { useState } from "react";
import LevelSelector from "@/components/LevelSelector";
import { Separator } from "@/components/ui/separator";
import { LevelIUpCalculatorService } from "@/utils/LevelIUpCalculatorService";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

export default function LevelUpCalculator() {
	const starPowerCost = 2000;
	const gadgetCost = 1000;
	const gearCost = 1000;
	const epicGearCost = 1500;
	const mythicGearCost = 2000;
	const hyperchargeCost = 5000;

	const [initialLevel, setInitialLevel] = useState(1);
	const [targetLevel, setTargetLevel] = useState(11);
	const [starPowers, setStarPowers] = useState(0);
	const [gadgets, setGadgets] = useState(0);
	const [gears, setGears] = useState(0);
	const [epicGears, setEpicGears] = useState(0);
	const [mythicGears, setMythicGears] = useState(0);
	const [hypercharge, setHypercharge] = useState(0);

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
						Gadgets
						<Image
							src="/gadget-icon.png"
							alt="Gadget icon"
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
				<div className="basis-1/2">
					<div className="flex items-center justify-center text-sm font-bold pb-1">
						Gears
						<Image
							src="/gear-super-rare-icon.png"
							alt="Gear icon"
							width={16}
							height={16}
							className="ml-2"
						/>
					</div>
					<LevelSelector
						level={gears}
						onLevelChange={(newLevel: number) => setGears(newLevel)}
						min={0}
						max={2}
					/>
				</div>
			</div>
			<div className="flex w-full pb-4">
				<div className="basis-1/2">
					<div className="flex items-center justify-center text-sm font-bold pb-1">
						Star powers
						<Image
							src="/star-power-icon.png"
							alt="Star powers icon"
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
						Epic gears
						<Image
							src="/gear-epic-icon.png"
							alt="Epic gear icon"
							width={16}
							height={16}
							className="ml-2"
						/>
					</div>
					<LevelSelector
						level={epicGears}
						onLevelChange={(newLevel: number) =>
							setEpicGears(newLevel)
						}
						min={0}
						max={1}
					/>
				</div>
			</div>
			<div className="flex w-full pb-4 justify-center">
				<div className="basis-1/2">
					<div className="flex items-center justify-center text-sm font-bold pb-1">
						Hypercharge
						<Image
							src="/hyper-charge-icon.png"
							alt="Hypercharges icon"
							width={16}
							height={16}
							className="ml-2"
						/>
					</div>
					<div className="flex justify-center">
						<Switch id="hypercharge" onCheckedChange={(checked) => setHypercharge(checked ? 1 : 0)}/>
					</div>
				</div>
				<div className="basis-1/2">
					<div className="flex items-center justify-center text-sm font-bold pb-1">
						Mythic gears
						<Image
							src="/gear-mythic-icon.png"
							alt="Mythic gear icon"
							width={16}
							height={16}
							className="ml-2"
						/>
					</div>
					<LevelSelector
						level={mythicGears}
						onLevelChange={(newLevel: number) =>
							setMythicGears(newLevel)
						}
						min={0}
						max={1}
					/>
				</div>
			</div>
			<Separator className="mb-4" />
			<div className="flex w-full pb-4">
				<div className="basis-1/2 text-center">
					<div className="text-sm font-bold pb-1">Coins</div>
					<div className="flex items-center justify-center text-l">
						{LevelIUpCalculatorService.calculateCoinCost( initialLevel, targetLevel ) +
							starPowers * starPowerCost +
							gadgets * gadgetCost +
							gears * gearCost +
							epicGears * epicGearCost +
							mythicGears * mythicGearCost +
							hypercharge * hyperchargeCost}
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
