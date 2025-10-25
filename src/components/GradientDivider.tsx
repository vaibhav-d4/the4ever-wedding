import React from 'react';
import {Box} from '@mui/material';

const GradientDivider = ({
  title,
  className,
  borderClass
}: {
  title?: React.ReactNode;
  className?: string;
  borderClass?: string;
}) => {
  return (
    <Box className="flex items-center my-10">
      <span className={`${borderClass} h-px flex-1 bg-gradient-to-r from-transparent to-gray-500 `}></span>
      {title && <span className={`shrink-0 px-4 lg:px-10 text-gray-900 ${className}`}>{title}</span>}
      <span className={`${borderClass} h-px flex-1 bg-gradient-to-l from-transparent to-gray-500 `}></span>
    </Box>
  );
};

export default GradientDivider;
