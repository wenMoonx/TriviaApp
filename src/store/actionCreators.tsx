import * as actionTypes from "./actionTypes";
import { IQuiz, QuizAction, DispatchType } from "../configs/types";

export function setQuiz(quizzes: IQuiz) {
  const action: QuizAction = {
    type: actionTypes.SET_QUIZ,
    quizzes,
  };

  return dispatch(action);
}

export function clearQuiz(quizzes: IQuiz) {
  const action: QuizAction = {
    type: actionTypes.CLEAR_QUIZ,
    quizzes,
  };
  return dispatch(action);
}

export function dispatch(action: QuizAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
