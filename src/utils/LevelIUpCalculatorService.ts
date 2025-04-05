export class LevelIUpCalculatorService {
    private static coinCosts: Record<number, number> = {
        2: 20,
        3: 35,
        4: 75,
        5: 140,
        6: 290,
        7: 480,
        8: 800,
        9: 1250,
        10: 1875,
        11: 2800,
    };

    private static powerPointRequirements: Record<number, number> = {
        2: 20,
        3: 30,
        4: 50,
        5: 80,
        6: 130,
        7: 210,
        8: 340,
        9: 550,
        10: 890,
        11: 1440,
    };

    /**
     * Calculate the total coin cost to upgrade from initialLevel to targetLevel.
     * @param initialLevel The starting level (1–10)
     * @param targetLevel The desired level (2–11)
     * @returns Total coin cost
     */
    static calculateCoinCost(initialLevel: number, targetLevel: number): number {
        if (initialLevel < 1 || initialLevel > 10) {
            throw new Error(`Invalid initial level: ${initialLevel}`);

        }
        if (targetLevel < 2 || targetLevel > 11) {
            throw new Error(`Invalid target level: ${targetLevel}`);
        }

        let totalCost = 0;
        for (let level = initialLevel; level < targetLevel; level++) {
            totalCost += this.coinCosts[level + 1];
        }
        return totalCost;
    }

    /**
     * Calculate the total power points required to upgrade from initialLevel to targetLevel.
     * @param initialLevel The starting level (1–10)
     * @param targetLevel The desired level (2–11)
     * @returns Total power points required
     */
    static calculatePowerPoints(initialLevel: number, targetLevel: number): number {
        if (initialLevel < 1 || initialLevel > 10) {
            throw new Error(`Invalid initial level: ${initialLevel}`);

        }
        if (targetLevel < 2 || targetLevel > 11) {
            throw new Error(`Invalid target level: ${targetLevel}`);
        }

        let totalPowerPoints = 0;
        for (let level = initialLevel; level < targetLevel; level++) {
            totalPowerPoints += this.powerPointRequirements[level + 1];
        }
        return totalPowerPoints;
    }
}