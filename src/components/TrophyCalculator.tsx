"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    winStreak: z.preprocess(
      (value) => (typeof value === "string" ? parseInt(value, 10) : value),
      z.number().int().nonnegative().finite().safe()
    ),
  });

export function TrophyCalculator() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			winStreak: 1,
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
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
								<Input type="number" placeholder="Amount of straight wins" {...field} />
							</FormControl>
							<FormDescription>
								Insert the amount of straight wins.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
