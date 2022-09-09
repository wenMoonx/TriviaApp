export interface IQuiz {
  id: number;
  category: string;
  question: string;
  correct_answer: string;
}
export interface IRoute {
  index?: boolean,
  path?: string,
  guard: boolean,
  element: any
}

export type QuizState = {
  quizzes: IQuiz[];
  status: boolean
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
