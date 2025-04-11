"use client";

import { useEffect, useState } from "react";
import LevelSelector from "@/components/LevelSelector";
import { Separator } from "@/components/ui/separator";
import { LevelIUpCalculatorService } from "@/utils/LevelIUpCalculatorService";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
export type LevelUpCost = {
	coins: number;
	powerPoints: number;
};
import { Input } from "@/components/ui/input";

const AMOUNT_OF_BRAWLERS = 100;

export type LevelUpCalculatorProps = {
	onLevelUpCostChange: (cost: LevelUpCost) => void; // Callback for when the cost changes
};

export default function LevelUpCalculator({
	onLevelUpCostChange,
}: LevelUpCalculatorProps) {
	const starPowerCost = 2000;
	const gadgetCost = 1000;
	const gearCost = 1000;
	const epicGearCost = 1500;
	const mythicGearCost = 2000;
	const hyperchargeCost = 5000;

	const [initialLevel, setInitialLevel] = useState<number>(1);
	const [targetLevel, setTargetLevel] = useState<number>(11);
	const [starPowers, setStarPowers] = useState<number>(0);
	const [gadgets, setGadgets] = useState<number>(0);
	const [gears, setGears] = useState<number>(0);
	const [epicGears, setEpicGears] = useState<number>(0);
	const [mythicGears, setMythicGears] = useState<number>(0);
	const [hypercharge, setHypercharge] = useState<number>(0);
	const [numberOfBrawlers, setNumberOfBrawlers] = useState<number>(1);

	useEffect(() => {
		const coins =
			LevelIUpCalculatorService.calculateCoinCost(
				initialLevel,
				targetLevel
			) +
			starPowers * starPowerCost +
			gadgets * gadgetCost +
			gears * gearCost +
			epicGears * epicGearCost +
			mythicGears * mythicGearCost +
			hypercharge * hyperchargeCost;

		const powerPoints = LevelIUpCalculatorService.calculatePowerPoints(
			initialLevel,
			targetLevel
		);

		onLevelUpCostChange({ coins, powerPoints });
	}, [
		initialLevel,
		targetLevel,
		starPowers,
		gadgets,
		gears,
		epicGears,
		mythicGears,
		hypercharge,
		onLevelUpCostChange,
	]);

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
						<Switch
							id="hypercharge"
							onCheckedChange={(checked) =>
								setHypercharge(checked ? 1 : 0)
							}
						/>
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
			<div className="text-sm pb-4">
				<div className="text-sm pb-4">
					<span>For </span>
					<Input
						type="number"
						value={numberOfBrawlers}
						className="inline-block w-[4rem]"
						max={999}
						onChange={(e) => {
							let newValue = parseInt(e.target.value, 10) || 0;
							if (newValue < 0) {
								newValue = 0;
							}
							if (newValue > AMOUNT_OF_BRAWLERS) {
								newValue = AMOUNT_OF_BRAWLERS;
							}
							setNumberOfBrawlers(newValue);
						}}
					/>
					<span> brawlers:</span>
				</div>
			</div>
			<div className="flex w-full pb-4">
				<div className="basis-1/2 text-center">
					<div className="text-sm font-bold pb-1">Coins</div>
					<div className="flex items-center justify-center text-l">
						{numberOfBrawlers *
							(LevelIUpCalculatorService.calculateCoinCost(
								initialLevel,
								targetLevel
							) +
								starPowers * starPowerCost +
								gadgets * gadgetCost +
								gears * gearCost +
								epicGears * epicGearCost +
								mythicGears * mythicGearCost +
								hypercharge * hyperchargeCost)}
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
						{numberOfBrawlers *
							LevelIUpCalculatorService.calculatePowerPoints(
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
