import {useNavigate} from "react-router";
import {useAppSelector} from "@utils/redux/hooks";
import {Box} from "@mui/material";
import {Y_AND_V} from "@utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const {websiteTypeId} = useAppSelector((state) => state.common);

  if (websiteTypeId === 1) return null;
  return (
    <div>
      {websiteTypeId === 2 && (
        <Box className="w-full border-b-1 border-black/10 shadow-xl bg-white/30 backdrop-blur-2xl fixed top-0 left-0 z-30">
          <Box className="text-5xl font-alice-regular my-2 mt-3 text-center text-primary">
            <span className="hover:cursor-pointer" onClick={() => navigate("/")}>
              {Y_AND_V}
            </span>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Header;
