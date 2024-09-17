type QuestionType = "FREE_TEXT" | "SINGLE_SELECT" | "MULTI_SELECT";

export interface Answer {
  id: number;
  text: string;
  user_text: string;
  selected: boolean;
}

export type Question = {
  id: number;
  index: number;
  text: string;
  answers: Answer[];
  status: "UNANSWERED" | "ANSWERED";
  type: QuestionType | null;
};

export const QUESTIONNAIRE_ID = 5;

export const questions: Question[] = [
  {
    id: 1,
    index: 1,
    text: "What is your name?",
    status: "UNANSWERED",
    type: "FREE_TEXT",
    answers: [{ id: 1, text: "", user_text: "", selected: false }],
  },
  {
    id: 2,
    index: 2,
    text: "Where are you born?",
    status: "UNANSWERED",
    type: "SINGLE_SELECT",
    answers: [
      { id: 2, text: "A small city", user_text: "", selected: false },
      { id: 3, text: "A big city", user_text: "", selected: false },
      { id: 4, text: "In the countryside", user_text: "", selected: false },
      { id: 5, text: "Elsewhere", user_text: "", selected: false },
    ],
  },
  {
    id: 3,
    index: 3,
    text: "What fruits do you like?",
    status: "UNANSWERED",
    type: "MULTI_SELECT",
    answers: [
      { id: 6, text: "Strawberries", user_text: "", selected: false },
      { id: 7, text: "Apples", user_text: "", selected: false },
      { id: 8, text: "Oranges", user_text: "", selected: false },
      { id: 9, text: "Watermelon", user_text: "", selected: false },
      { id: 10, text: "None", user_text: "", selected: false },
    ],
  },
];
