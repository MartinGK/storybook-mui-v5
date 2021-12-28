import * as React from "react";
import { Button as MuiButton } from "@mui/material";
// import { Button as MuiButton } from "@material-ui/core";

export type ButtonProps = {
  content: string;
};

const Button: React.FC<ButtonProps> = ({ content }: ButtonProps) => {
  return <MuiButton variant="contained">{content}</MuiButton>;
};

export default Button;
