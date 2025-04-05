"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

type LevelSelectorProps = {
	level: number;
	onLevelChange: (newLevel: number) => void;
	min: number;
	max: number;
};

export default function LevelSelector({
	level,
	onLevelChange,
	min,
	max
}: LevelSelectorProps) {
	return (
		<div className="flex justify-evenly">
			<Button
				variant="outline"
				size="icon"
				className="h-6 w-6 shrink-0 rounded-full"
				onClick={() => onLevelChange(level - 1)}
				disabled={level <= min}
			>
				<Minus />
			</Button>
			<div className="text-center text-sm min-w-6">{level}</div>
			<Button
				variant="outline"
				size="icon"
				className="h-6 w-6 shrink-0 rounded-full"
				onClick={() => onLevelChange(level + 1)}
				disabled={level >= max}
			>
				<Plus />
			</Button>
		</div>
	);
}
