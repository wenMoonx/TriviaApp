import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { StyledContainer } from "../../components/styles/StyledContainer";
import { StyledButton } from "../../components/styles/StyledButton";
import { StyledItem } from "../../components/styles/StyledItem";
import { Grid, Typography } from "@mui/material";
import { IQuiz } from "../../configs/types";

type Props = {
  children?: React.ReactChild[];
  quizzes: readonly IQuiz[];
  answer: string[];
};

export const Answer: React.FC<Props> = ({ quizzes, answer }) => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  useEffect(() => {
    for (let i = 0; i < quizzes.length; i++) {
      if (quizzes[i].correct_answer === answer[i]) {
        setScore((prevState) => prevState + 1);
      }
    }
  }, [quizzes, answer]);
  return (
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
            <Typography variant="h3" component="h3" align="center">
              You scored
            </Typography>
            <Typography variant="h4" component="h4" align="center">
              {score}/{answer.length}
            </Typography>
          </Grid>
          {quizzes.map((quiz: IQuiz) => (
            <StyledItem
              question={quiz.question}
              isCorrect={quiz.correct_answer === answer[quiz.id]}
            />
          ))}
          <Grid item xs>
            <StyledButton
              text="PLAY AGAIN?"
              color="primary"
              onClick={() => {
                navigate("/");
              }}
            ></StyledButton>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};
