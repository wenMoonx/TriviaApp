import React from "react";

import { Button } from "@mui/material";

type Props = {
  children?: React.ReactChild[];
  text: string;
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined;
  onClick: () => void;
};

export const StyledButton: React.FC<Props> = ({ text, color, onClick }) => {
  return (
    <>
      <Button
        variant="contained"
        color={color}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};
