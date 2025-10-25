import React from 'react';
import {Box} from '@mui/material';
import GradientDivider from './GradientDivider';
import clsx from 'clsx';
import {THE_COUPLE_INFO} from '@utils/constants';

const CoupleInfo: React.FC = () => {
  return (
    <Box className="px-4 relative mt-50 mb-16">
      <GradientDivider
        title={<Box className={clsx('flex items-center justify-center gap-4')}>{THE_COUPLE_INFO.title}</Box>}
        className="text-5xl lg:text-7xl font-malarkey"
      />
      <Box className="my-8">
        <Box className="text-center font-alice-regular text-xl">{THE_COUPLE_INFO.subtitle}</Box>
        <Box className="text-center text-primary text-xl font-semibold">{THE_COUPLE_INFO.couple_tagline}</Box>
        {/* <Box className="text-center mt-4  font-dancing-script text-2xl">{THE_COUPLE_INFO.couple_description}</Box> */}
      </Box>
      <Box className={clsx('max-w-full lg:max-w-[90%] mx-auto px-4')}>
        {/* Use single column on small screens and grid layout on md+ */}
        <Box className="grid grid-cols-1 md:grid-cols-5 grid-rows-auto md:grid-rows-5 gap-6 md:gap-0 relative">
          {/* Bride block - centered on mobile, positioned on md+ */}
          <Box className="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 pr-4 md:pr-20 z-10 text-center md:text-left bg-amber-100/50 backdrop-blur-xs p-6 rounded-4xl">
            <span className="text-6xl m-3 block font-malarkey">{THE_COUPLE_INFO.bride.name}</span>
            <span className="text-md block text-wedding-blue-500">{THE_COUPLE_INFO.bride.tagline}</span>
            <p className="mt-3 text-sm">{THE_COUPLE_INFO.bride.description}</p>
          </Box>

          {/* Center logo - static and centered on mobile, absolute overlapping on md+ */}
          <Box className="md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4 flex items-center justify-center z-20">
            {/* Center logo: flex-centered on mobile, absolute-overlap on md+ */}
            <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center pointer-events-none w-full">
              <div className="rounded-full overflow-hidden flex items-center justify-center w-full">
                <img src={THE_COUPLE_INFO.logo} alt="The couple" className="w-[90vw] max-w-[500px] object-contain" />
              </div>
            </div>
          </Box>

          {/* Groom block - centered on mobile, positioned on md+ */}
          <Box className="md:col-start-4 md:col-end-6 md:row-start-4 md:row-end-6 pl-4 md:pl-20 text-center md:text-right z-10 bg-amber-100/50 backdrop-blur-xs p-6 rounded-4xl">
            <span className="text-6xl m-3 block font-malarkey">{THE_COUPLE_INFO.groom.name}</span>
            <span className="text-md block text-wedding-blue-500">{THE_COUPLE_INFO.groom.tagline}</span>
            <p className="mt-3 text-sm">{THE_COUPLE_INFO.groom.description}</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoupleInfo;
