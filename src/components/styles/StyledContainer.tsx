import React from "react";
import { Container } from "@mui/material";

export const StyledContainer: React.FC<{ children: React.ReactChild }> = (
  props
) => {
  return (
    <React.Fragment>
      <Container maxWidth="sm" sx={{ bgcolor: "#a9abad", height: "100vh" }}>
        {props.children}
      </Container>
    </React.Fragment>
  );
};
