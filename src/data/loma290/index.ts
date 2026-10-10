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
import { glossaryQuestions } from './glossary';

export { chapter1Questions, chapter2Questions, chapter3Questions, chapter4Questions, chapter5Questions, chapter6Questions, chapter7Questions, chapter8Questions, chapter9Questions, chapter10Questions, chapter11Questions, chapter12Questions, chapter13Questions, chapter14Questions, glossaryQuestions };

export const companyOperationsQuestions: Question[] = [
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
  ...glossaryQuestions
];
