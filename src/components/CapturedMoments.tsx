import React from 'react';
import {Box} from '@mui/material';
import lightBgFloral from '@assets/common/single-black-floral-moments.svg';
// import GradientDivider from './GradientDivider';
import clsx from 'clsx';
import {GALLERY_IMAGES} from '@utils/constants';

const CapturedMoments: React.FC = () => {
  return (
    <Box className="px-4 relative mb-32">
      {/* <GradientDivider title="Snaps" className="text-5xl lg:text-7xl font-malarkey" /> */}
      <Box
        className={clsx(
          `max-w-[1240px] mx-auto my-10 relative z-[1]`,
          'flex flex-col gap-6',
          'md:grid md:grid-cols-3 md:grid-rows-3 md:gap-6'
        )}
      >
        {/* Sweet Text */}
        <GridCornerText text="Sweet..." position="top-left" className="" />
        {/* First image (spans 2 rows in grid, normal in flex) */}
        <GridSideImage imgSrc={GALLERY_IMAGES[0]} position="left" className="" />
        {/* Second column images */}
        <GridCenterImage imgSrc={GALLERY_IMAGES[1]} position="top" className="" />
        <GridCenterImage imgSrc={GALLERY_IMAGES[2]} position="center" className="" />
        <GridCenterImage imgSrc={GALLERY_IMAGES[3]} position="bottom" className="" />
        {/* Third column image (spans 2 rows in grid, normal in flex) */}
        <GridSideImage imgSrc={GALLERY_IMAGES[4]} position="right" className="" />
        {/* Memories Text */}
        <GridCornerText text="Memories..." position="bottom-right" className="" />
      </Box>
    </Box>
  );
};

export default CapturedMoments;

const GridSideImage = ({
  imgSrc,
  position,
  className
}: {
  imgSrc: string;
  position: 'left' | 'right';
  className?: string;
}) => (
  <div
    className={clsx(
      'flex items-center justify-center rounded-xl shadow-xl',
      position === 'left' && 'col-start-1 col-end-2 row-start-2 row-end-4',
      position === 'right' && 'col-start-3 col-end-4 row-start-1 row-end-3',
      className
    )}
  >
    <img
      src={imgSrc}
      alt={`Wedding moment - ${position} side`}
      className="object-cover w-full h-full rounded-xl"
      loading="lazy"
    />
  </div>
);

const GridCenterImage = ({
  imgSrc,
  position,
  className
}: {
  imgSrc: string;
  position: 'top' | 'center' | 'bottom';
  className?: string;
}) => (
  <div
    className={clsx(
      'rounded-xl shadow-xl flex items-center justify-center col-start-2 col-end-3',
      position === 'top' && 'row-start-1 row-end-2',
      position === 'center' && 'row-start-2 row-end-3',
      position === 'bottom' && 'row-start-3 row-end-4',
      className
    )}
  >
    <img
      src={imgSrc}
      alt={`Wedding moment - ${position}`}
      className="object-cover w-full h-72 rounded-xl"
      loading="lazy"
    />
  </div>
);

const GridCornerText = ({
  text,
  position,
  className
}: {
  text: string;
  position: 'top-left' | 'bottom-right';
  className?: string;
}) => (
  <div
    className={clsx(
      'relative flex items-center justify-center font-dancing-script text-4xl sm:text-5xl text-black/80 py-8 sm:py-0 font-bold',
      position === 'top-left' && 'col-start-1 col-end-2 row-start-1 row-end-2',
      position === 'bottom-right' && 'col-start-3 col-end-4 row-start-3 row-end-4',
      className
    )}
  >
    <img
      src={lightBgFloral}
      alt="Floral background"
      className={clsx(
        // Responsive sizing and positioning for mobile/tablet
        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-1',
        'opacity-20 pointer-events-none select-none',
        'w-[300px] h-[300px] scale-150 lg:scale-150 object-contain',
        position === 'top-left' && 'rotate-20  mt-20',
        position === 'bottom-right' && 'rotate-200 -mt-20'
      )}
    />
    <span className="relative z-10 text-center drop-shadow-lg">{text}</span>
  </div>
);
