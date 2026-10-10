import { Question } from '../../types';
import { chapter1Questions } from './chapter1';
import { chapter2Questions } from './chapter2';
import { chapter3Questions } from './chapter3';
import { chapter4Questions } from './chapter4';
import { chapter5Questions } from './chapter5';
import { chapter6Questions } from './chapter6';
import { chapter7Questions } from './chapter7';
import { chapter8Questions } from './chapter8';
import { chapter9Questions } from './chapter9';
import { chapter10Questions } from './chapter10';
import { chapter11Questions } from './chapter11';
import { chapter12Questions } from './chapter12';
import { chapter13Questions } from './chapter13';
import { chapter14Questions } from './chapter14';
import { finalExamQuestions } from './finalExam';
import { tpgChapterQuestions } from './tpgChapterQuestions';
import { tpgMaster100 } from './tpgMaster100';
import { glossaryQuestions } from './chapter15';

// Flatten TPG Chapter questions
const flattenedTpgQuestions = tpgChapterQuestions.flatMap(c => c.questions);

// Mega Pool containing EVERYTHING
const masterPool: Question[] = [
  ...chapter1Questions,
  ...chapter2Questions,
  ...chapter3Questions,
  ...chapter4Questions,
  ...chapter5Questions,
  ...chapter6Questions,
  ...chapter7Questions,
  ...chapter8Questions,
  ...chapter9Questions,
  ...chapter10Questions,
  ...chapter11Questions,
  ...chapter12Questions,
  ...chapter13Questions,
  ...chapter14Questions,
  ...finalExamQuestions,
  ...flattenedTpgQuestions,
  ...tpgMaster100,
  ...glossaryQuestions
];

// Fisher-Yates Shuffle
const shuffle = (array: Question[]): Question[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Create 20 unique simulation rounds
// Each round is a 60-question sample from the master pool
// To ensure variety, we shuffle the pool for each round
export const simulationRounds: Question[][] = Array.from({ length: 20 }, () => {
  const randomizedPool = shuffle(masterPool);
  return randomizedPool.slice(0, 60);
});
