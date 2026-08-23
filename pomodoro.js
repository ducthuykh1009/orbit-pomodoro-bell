const phases = [{ name: "focus", seconds: 25 * 60 }, { name: "short break", seconds: 5 * 60 }];

function schedule(rounds = 4) {
  return Array.from({ length: rounds }, (_, index) => [phases[0], phases[1]]).flat().map((phase, index) => ({ round: Math.floor(index / 2) + 1, ...phase }));
}

console.table(schedule(Number(process.argv[2]) || 2));
