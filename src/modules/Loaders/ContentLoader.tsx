import React from "react";
import { Box, Fade } from "@mui/material";
import { MAX_WIDTH, Y_AND_V } from "@utils/constants";
import { useAppSelector } from "@utils/redux/hooks";
import { Link } from "react-router";
import { SquareArrowOutUpRight } from "lucide-react";

interface IContentLoader {
  children: React.ReactNode;
}

const ContentLoader = ({ children }: IContentLoader) => {
  const { websiteTypeId } = useAppSelector((state) => state.common);
  return (
    <Fade in timeout={1000}>
      <Box>
        {/* TEMPORARY ADMIN BUTTON */}
        <Box className="border-b border-gray-200 bg-red-300 px-4 py-2 text-gray-900 text-center flex justify-center items-center">
          <Link
            className="text-center font-medium hover:underline flex justify-center items-center"
            to="/admin-panel"
          >
            Admin Panel &nbsp; <SquareArrowOutUpRight size={14} />{" "}
          </Link>
          <Box className="ml-3 text-xs tracking-wide">
            (will be removed later)
          </Box>
        </Box>
        {/* HEADER */}
        {websiteTypeId === 2 && (
          <Box className="w-full border-b-1 border-black/10 shadow-xl">
            <Box className="text-4xl font-alice-regular my-2 mt-3 text-center text-red-400">
              {Y_AND_V}
            </Box>
          </Box>
        )}
        <Box className="w-full flex justify-center items-center">
          <Box className="m-auto w-full px-2" sx={{ maxWidth: MAX_WIDTH }}>
            {children}
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default ContentLoader;
