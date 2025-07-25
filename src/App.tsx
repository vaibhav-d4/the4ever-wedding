import { Box } from "@mui/material";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "@modules/Home";
import { AdminPanel } from "@modules/AdminPanel";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </Box>
  );
};

export default App;
