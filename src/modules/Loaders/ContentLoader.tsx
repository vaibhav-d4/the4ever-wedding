import React from "react";
import { Box, Fade } from "@mui/material";
import { MAX_WIDTH, YESHA_AND_VAIBHAV } from "@utils/constants";
import { useAppSelector } from "@utils/redux/hooks";

interface IContentLoader {
  children: React.ReactNode;
}

const ContentLoader = ({ children }: IContentLoader) => {
  const { websiteTypeId } = useAppSelector((state) => state.common);
  return (
    <Fade in timeout={1000}>
      <Box>
        {/* HEADER */}
        {websiteTypeId === 2 && (
          <Box className="w-full border-b-1 shadow-xl">
            <Box className="text-4xl font-alice-regular my-2 mt-3 text-center">
              {YESHA_AND_VAIBHAV}
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
