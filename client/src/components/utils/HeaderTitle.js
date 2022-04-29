import * as React from "react";
import { Typography } from "@mui/material";

export default function HeaderTitle() {
  return (
    <Typography variant="h1" component="h1" color="#fff" textAlign="center" sx={{paddingY: 10}}>
      Superhero CRUD
    </Typography>
  );
}
