import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./modules";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Box>
  );
};

export default App;
