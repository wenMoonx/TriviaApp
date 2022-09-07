import React, { useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import axios from "axios";

import { StyledContainer } from "../../components/styles/StyledContainer";
import { StyledSpinner } from "../../components/styles/StyledSpinner";
import { Grid, Button, Typography, Stack } from "@mui/material";

import { QuizBox } from "./QuizBox";
import { Answer } from "../answer";
import { API_URL } from "../../configs/constants";
import { IQuiz, QuizState } from "../../configs/types";

type Props = {
  createQuiz: (quiz: IQuiz | any) => void;
};

export const Quiz: React.FC<Props> = ({ createQuiz }) => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answer, setAnswer] = useState<string[]>([]);

  const getQuiz = () => {
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
  };

  const quizzes: readonly IQuiz[] = useSelector(
    (state: QuizState) => state.quizzes,
    shallowEqual
  );

  useEffect(() => {
    if (quizzes.length === 0) getQuiz();
  }, []);

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
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    setAnswer((prevState: any) => [...prevState, "True"]);
                    setQuizIndex((quizIndex) => quizIndex + 1);
                  }}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setAnswer((prevState: any) => [...prevState, "False"]);
                    setQuizIndex((quizIndex) => quizIndex + 1);
                  }}
                >
                  No
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </StyledContainer>
      </>
    ) : (
      <>
        <Answer quizzes={quizzes} answer={answer} />
      </>
    )
  ) : (
    <>
		<StyledSpinner />
    </>
  );
};
