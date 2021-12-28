import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { FormControlLabel } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const CustomCheckbox = styled(Checkbox)(({ theme }) => {
  console.log("theme", theme);
  return {
    color: theme.status.danger,
    "&.Mui-checked": {
      color: theme.status.danger,
    },
  };
});

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});

export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        label="test"
        control={<CustomCheckbox defaultChecked />}
      />
    </ThemeProvider>
  );
}
