export class TrophyCalculatorService {
  static calculateTrophies(winStreak: number): number {
    let totalTrophies = 0;

    for (let i = 1; i <= winStreak; i++) {
      totalTrophies += 8;

      if (i > 1) {
        const bonus = Math.min(i - 1, 5);
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
      totalTrophies += 8;

      if (wins > 1) {
        const bonus = Math.min(wins - 1, 5);
        totalTrophies += bonus;
      }
    }

    return wins;
  }
}
