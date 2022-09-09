import React, { useEffect, useState, useCallback } from "react";
import { useSelector, shallowEqual } from "react-redux";
import axios from "axios";

import { StyledContainer } from "../../components/styles/StyledContainer";
import { StyledSpinner } from "../../components/styles/StyledSpinner";
import { StyledButton } from "../../components/styles/StyledButton";
import { Grid, Typography, Stack } from "@mui/material";

import { QuizBox } from "./QuizBox";
import { Answer } from "../answer";
import { API_URL } from "../../configs/constants";
import { IQuiz, QuizState } from "../../configs/types";

type IProps = {
  createQuiz: (quiz: IQuiz | any) => void;
  notAllowStatus: () => void;
};

export const Quiz: React.FC<IProps> = ({ createQuiz, notAllowStatus }) => {
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<string[]>([]);

  const getQuiz = useCallback(() => {
    axios
      .post(API_URL)
      .then((res) => {
        const data = res.data;
        if (data.response_code === 0) {
          for (let i = 0; i < data.results.length; i++) {
            createQuiz({
              ...data.results[i],
              id: i,
            });
          }
        } else {
          alert("An error occurred while loading the QuizString.");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [createQuiz]);

  const quizzes: readonly IQuiz[] = useSelector(
    (state: QuizState) => state.quizzes,
    shallowEqual
  );

  useEffect(() => {
    if (quizzes.length === 0) getQuiz();
  }, [quizzes, getQuiz]);
  return quizzes.length ? (
    quizzes.length !== answer.length ? (
      <>
        <StyledContainer>
          <Grid
            container
            style={{ padding: 20 }}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            minHeight="100vh"
          >
            <Grid item xs>
              <Typography variant="h4" component="h4" align="center">
                {quizzes[quizIndex].category}
              </Typography>
            </Grid>
            <Grid item xs>
              <QuizBox
                quiz={quizzes[quizIndex].question}
                index={quizIndex}
                total={quizzes.length}
              />
            </Grid>
            <Grid item xs>
              <Stack spacing={2} direction="row">
                <StyledButton
                  text="Yes"
                  color="success"
                  onClick={() => {
                    setAnswer((prevState: any) => [...prevState, "True"]);
                    setQuizIndex((quizIndex) => quizIndex + 1);
                  }}
                ></StyledButton>
                <StyledButton
                  text="NO"
                  color="error"
                  onClick={() => {
                    setAnswer((prevState: any) => [...prevState, "False"]);
                    setQuizIndex((quizIndex) => quizIndex + 1);
                  }}
                ></StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </StyledContainer>
      </>
    ) : (
      <>
        <Answer notAllowStatus={notAllowStatus} quizzes={quizzes} answer={answer} />
      </>
    )
  ) : (
    <>
      <StyledSpinner message="Loading..." />
    </>
  );
};
