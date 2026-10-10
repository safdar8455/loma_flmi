import { Question } from '../../types';
import { loma320GlossaryPart1Questions } from './glossaryPart1';
import { loma320GlossaryPart2Questions } from './glossaryPart2';
import { loma320GlossaryPart3Questions } from './glossaryPart3';

export const loma320GlossaryQuestions: Question[] = [
  ...loma320GlossaryPart1Questions,
  ...loma320GlossaryPart2Questions,
  ...loma320GlossaryPart3Questions
];
