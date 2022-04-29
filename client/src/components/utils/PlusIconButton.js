import * as React from "react";
import Add from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

export default function PlusIconButton() {
  return (
    <IconButton
      aria-label="plus"
      variant="outlined"
      size="large"
      sx={{
        backgroundColor: "#A9A7A6",
        position: "fixed",
        bottom: 20,
        right: 20,
      }}
    >
      <Add fontSize="inherit" />
    </IconButton>
  );
}
