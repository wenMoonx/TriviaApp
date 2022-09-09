import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import { Guard } from "../components/basic/Guard";
import { Home } from "../pages/home";
import { Quiz } from "../pages/quiz";
import { IQuiz, IRoute } from "../configs/types";
import { setQuiz, setStatus, clearStatus } from "../store/actionCreators";

const IndexRouter: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const createQuiz = React.useCallback(
    (quizzes: IQuiz) => dispatch(setQuiz(quizzes)),
    [dispatch]
  );

  const allowStatus = React.useCallback(
    () => dispatch(setStatus()),
    [dispatch]
  );
  const notAllowStatus = React.useCallback(
    () => dispatch(clearStatus()),
    [dispatch]
  );

  const routes: IRoute[] = [
    {
      path: "/",
      index: true,
      guard: false,
      element: <Home allowStatus={allowStatus} />,
    },
    {
      path: "/quiz",
      index: true,
      guard: true,
      element: <Quiz createQuiz={createQuiz} notAllowStatus={notAllowStatus} />,
    },
    {
      path: "/*",
      index: true,
      guard: false,
      element: <Navigate to="/" replace />,
    },
  ];

  return (
    <>
      <HashRouter>
        <Routes>
          {routes.map((route: IRoute, key: number) => {
            return route.guard === true ? (
              <Route
                key={key}
                path={route.path}
                element={<Guard>{route.element}</Guard>}
                index={route.index}
              />
            ) : (
              <Route
                key={key}
                path={route.path}
                element={route.element}
                index={route.index}
              />
            );
          })}
        </Routes>
      </HashRouter>
    </>
  );
};

export default IndexRouter;
