import React from "react";

import { Grid, Typography } from "@mui/material";
import { StyledContainer } from "./StyledContainer";

export const StyledSpinner = () => {
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
          Loading...
        </Typography>
      </Grid>
    </StyledContainer>
  );
};
