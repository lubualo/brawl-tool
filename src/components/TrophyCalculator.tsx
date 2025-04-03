"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { trophyFormSchema } from "@utils/validation";
import { useForm } from "react-hook-form";
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
import { calculateTrophies, calculateWinsRequired } from "@/utils/trophyCalculatorService";

export default function TrophyCalculator() {

	const form = useForm<z.infer<typeof trophyFormSchema>>({
		resolver: zodResolver(trophyFormSchema),
		defaultValues: {
			winStreak: 1,
			totalTrophies: 8,
		},
	});

	function onSubmit() {
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
									onChange={async (e) => {
										const value = Math.max(0, parseInt(e.target.value, 10));
										field.onChange(e);
										if (!isNaN(value)) {
											form.setValue("totalTrophies", calculateTrophies(value));
											await form.trigger("winStreak")
										}
									}}
								/>
							</FormControl>
							<FormDescription>
								Insert the amount of consecutive victories.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="totalTrophies"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Trophies</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Enter amount of trophies"
									{...field}
									onChange={async(e) => {
										const value = Math.max(0, parseInt(e.target.value, 10));
										field.onChange(e); // Sync with react-hook-form
										if (!isNaN(value)) {
											form.setValue("winStreak", calculateWinsRequired(value));
											await form.trigger("totalTrophies")
										}
									}}
								/>
							</FormControl>
							<FormDescription>
								Insert the amount of desired trophies.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
