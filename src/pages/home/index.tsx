import React from "react";

import { StyledContainer } from "../../components/styles/StyledContainer";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledContainer>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          minHeight="100vh"
        >
          <Grid item>
            <Typography variant="h3" component="h3" align="center">
              Welcome to the Trivia Challenge!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="h5" align="center">
              You will be presented with 10 True or False questions.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="h5" align="center">
              Can you score 100%?
            </Typography>
          </Grid>
          <Grid item display="flex" flexDirection="column" alignItems="center">
            <Button
              variant="contained"
              onClick={() => {
                navigate("quiz");
              }}
            >
              Begin
            </Button>
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};
