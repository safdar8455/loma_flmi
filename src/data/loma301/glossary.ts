import { Question } from '../../types';
import { glossaryPart1Questions } from './glossaryPart1';
import { glossaryPart2Questions } from './glossaryPart2';

export const glossaryQuestions: Question[] = [
  ...glossaryPart1Questions,
  ...glossaryPart2Questions
];
