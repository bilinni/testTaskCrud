import { Box, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CardPage from "../pages/CardPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Box
          sx={{
            backgroundImage: "url(https://wallpaper.dog/large/20509764.jpg)",
            width: "100vw",
            minHeight: "100%",
            backgroundSize: "cover",
            paddingBottom: 10,
            position: "relative",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:heroId" element={<CardPage />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
