import { z } from "zod";

export const trophyFormSchema = z.object({
  winStreak: z.preprocess(
    (value) => (typeof value === "string" ? parseInt(value, 10) : value),
    z.number().int().nonnegative().finite().max(100)
  ),
  totalTrophies: z.preprocess(
    (value) => (typeof value === "string" ? parseInt(value, 10) : value),
    z.number().int().nonnegative().finite().max(1285)
  ),
});
