import React from "react";
import {useAppSelector} from "@utils/redux/hooks";
import {Box} from "@mui/material";
import {Y_AND_V} from "@utils/constants";

const Header = () => {
  const {websiteTypeId} = useAppSelector((state) => state.common);
  if (websiteTypeId === 1) return null;
  return (
    <div>
      {websiteTypeId === 2 && (
        <Box className="w-full border-b-1 border-black/10 shadow-xl">
          <Box className="text-6xl font-alice-regular my-2 mt-3 text-center text-primary">{Y_AND_V}</Box>
        </Box>
      )}
    </div>
  );
};

export default Header;
