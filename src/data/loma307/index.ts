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
import { glossaryQuestions } from './glossary';

export { chapter1Questions } from './chapter1';
export { chapter2Questions } from './chapter2';
export { chapter3Questions } from './chapter3';
export { chapter4Questions } from './chapter4';
export { chapter5Questions } from './chapter5';
export { chapter6Questions } from './chapter6';
export { chapter7Questions } from './chapter7';
export { chapter8Questions } from './chapter8';
export { chapter9Questions } from './chapter9';
export { chapter10Questions } from './chapter10';
export { glossaryQuestions } from './glossary';

export const businessLawQuestions: Question[] = [
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
  ...glossaryQuestions
];
