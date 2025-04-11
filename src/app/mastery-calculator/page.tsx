"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MasteryCalculatorService } from "@/utils/MasteryCalculatorService";
import { useState } from "react";

const MIN_MASTERY_POINTS = 0;
const MAX_MASTERY_POINTS = 99999;

export default function Page() {
	const [currentBrawlerTrophies, setCurrentBrawlerTrophies] = useState(0);
	const [currentBrawlerMasteryPoints, setCurrentBrawlerMasteryPoints] =
		useState(0);
	const [targetBrawlerMasteryPoints, setTargetBrawlerMasteryPoints] =
		useState(100);

	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle className="text-xl text-center font-bold">
					<h1>Mastery calculator</h1>
				</CardTitle>
				<CardDescription>
					This calculator considers +8 trophies per win and does not
					contemplate the win streak bonuses.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="pb-4">
					<Label htmlFor="currentBrawlerTrophies" className="pb-4">
						Brawler&apos;s current trophies
					</Label>
					<Input
						type="number"
						value={currentBrawlerTrophies}
						id="currentBrawlerTrophies"
						onChange={(e) => {
							let newValue = parseInt(e.target.value, 10) || 0;
							if (newValue < MIN_MASTERY_POINTS) {
								newValue = MIN_MASTERY_POINTS;
							}
							if (newValue > MAX_MASTERY_POINTS) {
								newValue = MAX_MASTERY_POINTS;
							}
							setCurrentBrawlerTrophies(newValue);
						}}
					/>
				</div>
				<div className="pb-4">
					<Label
						htmlFor="currentBrawlerMasteryPoints"
						className="pb-4"
					>
						Brawler&apos;s current mastery points
					</Label>
					<Input
						type="number"
						value={currentBrawlerMasteryPoints}
						id="currentBrawlerMasteryPoints"
						onChange={(e) => {
							let newValue = parseInt(e.target.value, 10) || 0;
							if (newValue < MIN_MASTERY_POINTS) {
								newValue = MIN_MASTERY_POINTS;
							}
							if (newValue > MAX_MASTERY_POINTS) {
								newValue = MAX_MASTERY_POINTS;
							}
							setCurrentBrawlerMasteryPoints(newValue);
						}}
					/>
				</div>
				<div className="pb-4">
					<Label
						htmlFor="targetBrawlerMasteryPoints"
						className="pb-4"
					>
						Target mastery points
					</Label>
					<Input
						type="number"
						value={targetBrawlerMasteryPoints}
						id="targetBrawlerMasteryPoints"
						onChange={(e) => {
							let newValue = parseInt(e.target.value, 10) || 0;
							if (newValue < MIN_MASTERY_POINTS) {
								newValue = MIN_MASTERY_POINTS;
							}
							if (newValue > MAX_MASTERY_POINTS) {
								newValue = MAX_MASTERY_POINTS;
							}
							setTargetBrawlerMasteryPoints(newValue);
						}}
					/>
				</div>
				<Separator className="mb-4" />
				<div>
					<h1 className="pb-4">
						<strong>Required victories (approx.)</strong>
					</h1>
					<h1 className="pb-4 text-xl">
						{MasteryCalculatorService.calculateNecessaryWins(
							currentBrawlerTrophies,
							currentBrawlerMasteryPoints,
							targetBrawlerMasteryPoints
						)}
					</h1>
				</div>
			</CardContent>
		</Card>
	);
}
