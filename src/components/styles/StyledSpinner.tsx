import React from "react";

import { Grid, Typography } from "@mui/material";
import { StyledContainer } from "./StyledContainer";

type Props = {
  message: string;
};

export const StyledSpinner: React.FC<Props> = ({ message }) => {
  return (
    <StyledContainer>
      <Grid
        container
        style={{ padding: 20 }}
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h4" component="h4" align="center">
          {message}
        </Typography>
      </Grid>
    </StyledContainer>
  );
};
