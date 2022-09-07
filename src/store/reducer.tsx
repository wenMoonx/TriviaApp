import { IQuiz, QuizAction, QuizState } from "../configs/types";
import * as actionTypes from "./actionTypes";

const initialState: QuizState = {
  quizzes: [],
};
const reducer = (
  state: QuizState = initialState,
  action: QuizAction
): QuizState => {
  switch (action.type) {
    case actionTypes.SET_QUIZ:
      const newQuiz: IQuiz = {
        id: action.quizzes.id,
        category: action.quizzes.category,
        question: action.quizzes.question,
        correct_answer: action.quizzes.correct_answer,
      };
      return {
        ...state,
        quizzes: state.quizzes.concat(newQuiz),
      };
    case actionTypes.CLEAR_QUIZ:
      const updatedQuiz: IQuiz[] = state.quizzes.filter(
        (article) => article.id !== action.quizzes.id
      );
      return {
        ...state,
        quizzes: updatedQuiz,
      };
  }
  return state;
};

export default reducer;
