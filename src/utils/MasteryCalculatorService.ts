export class MasteryCalculatorService {
    static calculateNecessaryWins(currentTrophies: number, currentMasteryPoints: number, targetMasteryPoints: number): number {
        let trophies = currentTrophies;
        let masteryPoints = currentMasteryPoints;
        let wins = 0;
        while (masteryPoints < targetMasteryPoints) {
            masteryPoints += this.getMasteryPointsBasedOnTrophies(trophies);
            trophies += 8;
            wins++;
        }
        return wins;
    }

    private static getMasteryPointsBasedOnTrophies(trophies: number): number {
        if (trophies < 0) {
            return 0;
        }
        if (0 <= trophies && trophies < 50) {
            return 5;
        }
        if (50 <= trophies && trophies < 100) {
            return 7;
        }
        if (100 <= trophies && trophies < 150) {
            return 10;
        }
        if (150 <= trophies && trophies < 200) {
            return 12;
        }
        if (200 <= trophies && trophies < 250) {
            return 15;
        }
        if (250 <= trophies && trophies < 300) {
            return 17;
        }
        if (300 <= trophies && trophies < 350) {
            return 20;
        }
        if (350 <= trophies && trophies < 400) {
            return 23;
        }
        if (400 <= trophies && trophies < 450) {
            return 25;
        }
        if (450 <= trophies && trophies < 500) {
            return 27;
        }
        if (500 <= trophies && trophies < 550) {
            return 35;
        }
        if (550 <= trophies && trophies < 600) {
            return 40;
        }
        if (600 <= trophies && trophies < 650) {
            return 45;
        }
        if (650 <= trophies && trophies < 700) {
            return 50;
        }
        if (700 <= trophies && trophies < 750) {
            return 55;
        }
        if (750 <= trophies && trophies < 800) {
            return 60;
        }
        if (800 <= trophies && trophies < 850) {
            return 65;
        }
        if (850 <= trophies && trophies < 900) {
            return 70;
        }
        if (900 <= trophies && trophies < 950) {
            return 75;
        }
        if (950 <= trophies && trophies < 1000) {
            return 80;
        }
        if (1000 <= trophies && trophies < 1050) {
            return 85;
        }
        if (1050 <= trophies && trophies < 1100) {
            return 90;
        }
        if (1100 <= trophies && trophies < 1150) {
            return 95;
        }
        return 100;
    }
}