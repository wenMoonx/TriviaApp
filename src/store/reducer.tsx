import { IQuiz, QuizAction, QuizState } from "../configs/types";
import * as actionTypes from "./actionTypes";

const initialState: QuizState = {
  quizzes: [],
  status: false,
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
        status: true,
        quizzes: state.quizzes.concat(newQuiz),
      };
    case actionTypes.SET_STATUS:
      return {
        status: true,
        quizzes: state.quizzes,
      };
    case actionTypes.CLEAR_STATUS:
      return {
        status: false,
        quizzes: state.quizzes,
      };
  }
  return state;
};

export default reducer;
