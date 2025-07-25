import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { WEBSITE_TYPES } from "@utils/constants";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "@utils/redux/hooks";
import { setWebsiteTypeId } from "@utils/redux/commonSlice";

const AdminPanel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [isError, setError] = useState(false);
  const [selectedWebsiteId, setSelectedWebsiteId] = useState(
    localStorage.getItem("websiteTypeId") || 1
  );

  const onPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== import.meta.env.VITE_ADMIN_PASSWORD) {
      setError(true);
    } else setShowPanel(true);
  };

  const PASSWORD_INPUT = (
    <form className="flex gap-4 flex-col" onSubmit={onPasswordSubmit}>
      Enter Password: &nbsp;
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={password}
        type={showPassword ? "text" : "password"}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(false);
        }}
        error={isError}
        helperText={isError && "Incorrect Password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem("websiteTypeId", selectedWebsiteId as string);
    dispatch(setWebsiteTypeId(selectedWebsiteId));
    navigate("/");
  };

  const ADMIN_PANEL = (
    <Box className="min-w-[200px]">
      <form className="flex gap-4 flex-col" onSubmit={onFormSubmit}>
        Change Website: &nbsp;
        <Select
          value={selectedWebsiteId}
          onChange={(e) => setSelectedWebsiteId(e.target.value)}
        >
          {WEBSITE_TYPES.map(({ label, value }) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
        <Button variant="contained" type="submit">
          Apply
        </Button>
      </form>
    </Box>
  );

  return (
    <Box className="mt-28 flex justify-center items-center">
      {!showPanel ? <Box>{PASSWORD_INPUT} </Box> : <Box>{ADMIN_PANEL}</Box>}
    </Box>
  );
};

export default AdminPanel;
