export class TrophyCalculatorService {
  static calculateTrophies(winStreak: number): number {
    let totalTrophies = 0;

    for (let i = 1; i <= winStreak; i++) {
      totalTrophies += 8; // Each win adds 8 trophies

      if (i > 1) {
        const bonus = Math.min(i - 1, 5); // Bonus is capped at +5 after the 6th win
        totalTrophies += bonus;
      }
    }

    return totalTrophies;
  }

  static calculateWinsRequired(trophies: number): number {
    let totalTrophies = 0;
    let wins = 0;

    while (totalTrophies < trophies) {
      wins++;
      totalTrophies += 8; // Base trophies per win

      if (wins > 1) {
        const bonus = Math.min(wins - 1, 5); // Bonus is capped at +5 after the 6th win
        totalTrophies += bonus;
      }
    }

    return wins;
  }
