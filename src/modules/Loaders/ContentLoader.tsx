import React from "react";
import {Box, Fade} from "@mui/material";
import {MAX_WIDTH} from "@utils/constants";
import {Header} from "@modules/Header";
import {Footer} from "@modules/Footer";
// import {Link} from "react-router";
// import {SquareArrowOutUpRight} from "lucide-react";

interface IContentLoader {
  children: React.ReactNode;
}

const ContentLoader = ({children}: IContentLoader) => {
  return (
    <Fade in timeout={1000}>
      <Box className="mb-10">
        {/* TEMPORARY ADMIN BUTTON */}
        {/* <Box className="border-b border-gray-200 bg-red-300 px-4 py-2 text-gray-900 text-center flex justify-center items-center">
          <Link
            className="text-center font-medium hover:underline flex justify-center items-center"
            to="/admin-panel"
          >
            Admin Panel &nbsp; <SquareArrowOutUpRight size={14} />{" "}
          </Link>
          <Box className="ml-3 text-xs tracking-wide">
            (will be removed later)
          </Box>
        </Box> */}
        {/* HEADER */}
        <Header />
        <Box className="w-full flex justify-center items-center">
          <Box className="m-auto w-full px-2" sx={{maxWidth: MAX_WIDTH}}>
            {children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </Fade>
  );
};

export default ContentLoader;
