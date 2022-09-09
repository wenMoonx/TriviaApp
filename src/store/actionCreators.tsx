import * as actionTypes from "./actionTypes";
import {
  IQuiz,
  QuizAction,
  DispatchType,
} from "../configs/types";

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

export function setStatus() {
  const action: any = {
    type: actionTypes.SET_STATUS
  };
  return dispatch(action);
}

export function clearStatus() {
  const action: any = {
    type: actionTypes.CLEAR_STATUS
  };
  return dispatch(action);
}

export function dispatch(action: any) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
