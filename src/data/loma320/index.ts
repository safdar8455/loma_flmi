import { Question } from '../../types';
import { loma320Chapter1Questions } from './chapter1';
import { loma320Chapter2Questions } from './chapter2';
import { loma320Chapter3Questions } from './chapter3';
import { loma320Chapter4Questions } from './chapter4';
import { loma320Chapter5Questions } from './chapter5';
import { loma320Chapter6Questions } from './chapter6';
import { loma320Chapter7Questions } from './chapter7';
import { loma320Chapter8Questions } from './chapter8';
import { loma320Chapter9Questions } from './chapter9';
import { loma320Chapter10Questions } from './chapter10';
import { loma320GlossaryQuestions } from './glossary';

export { loma320Chapter1Questions, loma320Chapter2Questions, loma320Chapter3Questions, loma320Chapter4Questions, loma320Chapter5Questions, loma320Chapter6Questions, loma320Chapter7Questions, loma320Chapter8Questions, loma320Chapter9Questions, loma320Chapter10Questions, loma320GlossaryQuestions };

export const lifeInsuranceLawQuestions: Question[] = [
  {
    id: 1,
    lo: "Incontestability clause.",
    question: "After how many years does an insurance policy typically become incontestable regarding state of health?",
    options: ["1 year", "2 years", "5 years", "Never"],
    answer: 1,
    explanation: "Most jurisdictions mandate a 2-year incontestability period."
  }
];
