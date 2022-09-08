import React from "react";

import { Grid, Typography } from "@mui/material";

type Props = {
  children?: React.ReactChild[];
  question: string;
  isCorrect: boolean;
};

export const StyledItem: React.FC<Props> = ({ question, isCorrect }) => {
  return (
    <>
      <Grid item xs>
        <Typography variant="subtitle1" component="p" align="center">
          {isCorrect ? "+" : "-"}&nbsp;{question}
        </Typography>
      </Grid>
    </>
  );
};
