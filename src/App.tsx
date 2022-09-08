import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import { Home } from "./pages/home";
import { Quiz } from "./pages/quiz";
import { IQuiz } from "./configs/types";
import { setQuiz } from "./store/actionCreators";

const App: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const createQuiz = React.useCallback(
    (quizzes: IQuiz) => dispatch(setQuiz(quizzes)),
    [dispatch]
  );

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz createQuiz={createQuiz} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
