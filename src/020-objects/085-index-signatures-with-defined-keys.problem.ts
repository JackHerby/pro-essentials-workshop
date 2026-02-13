// interface Scores {
//   [subject: string]: number;
//   math: number;
//   english: number;
//   science: number;
// }

// interface Scores {
//   [subject: string]: number;
// }
//
// interface Scores {
//   math: number;
//   english: number;
//   science: number;
// }

interface RequiredScores {
  math: number;
  english: number;
  science: number;
}

interface Scores extends RequiredScores {
  [subject: string]: number;
}

// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
