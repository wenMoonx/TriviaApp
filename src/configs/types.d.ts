export interface IQuiz {
  id: number;
  category: string;
  question: string;
  correct_answer: string;
}

export type QuizState = {
  quizzes: IQuiz[];
};

export type QuizAction = {
  type: string;
  quizzes: IQuiz;
};

export type QuizResult = {
  id: number;
  answer: string;
};

export type DispatchType = (args: QuizAction) => QuizAction;
