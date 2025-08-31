import {Box} from "@mui/material";
import "./App.css";

import {Route, Routes} from "react-router";
import {Home} from "@modules/Home";
import {AdminPanel} from "@modules/AdminPanel";
import {Invite} from "@modules/Invite";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  return (
    <Box sx={{position: "relative", minHeight: "100vh", overflow: "hidden"}}>
      <AnimatedBackground />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/invite/:user_name" element={<Invite />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </Box>
  );
};

export default App;
