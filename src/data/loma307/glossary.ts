import { Question } from '../../types';
import { glossaryPart1Questions } from './glossaryPart1';
import { glossaryPart2Questions } from './glossaryPart2';
import { glossaryPart3Questions } from './glossaryPart3';
import { glossaryPart4Questions } from './glossaryPart4';
import { glossaryPart5Questions } from './glossaryPart5';

export const glossaryQuestions: Question[] = [
  ...glossaryPart1Questions,
  ...glossaryPart2Questions,
  ...glossaryPart3Questions,
  ...glossaryPart4Questions,
  ...glossaryPart5Questions,
];
