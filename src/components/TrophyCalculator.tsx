"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { trophyFormSchema } from "@utils/validation";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@components/ui/form";
import { Input } from "@components/ui/input";
import TrophyCalculatorService from "@/utils/trophyCalculatorService";

export default function TrophyCalculator() {
	const [totalTrophies, setTotalTrophies] = useState<number>(8);

	const form = useForm<z.infer<typeof trophyFormSchema>>({
		resolver: zodResolver(trophyFormSchema),
		defaultValues: {
			winStreak: 1,
		},
	});

	function onSubmit(values: z.infer<typeof trophyFormSchema>) {
		const service = new TrophyCalculatorService();
		console.log(service.calculate(values.winStreak));
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="winStreak"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Win streak</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Enter win streak"
									{...field}
									onChange={(e) => {
										const value = parseInt(
											e.target.value,
											10
										);
										field.onChange(e); // Sync with react-hook-form
										if (!isNaN(value)) {
                                            const service = new TrophyCalculatorService();
											setTotalTrophies(
												service.calculate(value)
											);
										}
									}}
								/>
							</FormControl>
							<FormDescription>
								Insert the amount of straight wins.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<h1>{totalTrophies}</h1>
			</form>
		</Form>
	);
}
