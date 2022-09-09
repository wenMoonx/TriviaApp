import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { QuizState } from "../../configs/types";
import { StyledSpinner } from "../styles/StyledSpinner";

interface Props {
  children: React.ReactChild;
}

export const Guard: React.FC<Props> = ({ children }) => {
  const status: boolean = useSelector(
    (state: QuizState) => state.status,
    shallowEqual
  );
  
  return status ? (
    <>{children}</>
  ) : (
    <StyledSpinner message="You can't play TriviaApp." />
  );
};
