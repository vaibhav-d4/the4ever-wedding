import React from 'react';
import {Box} from '@mui/material';
import {QUOTE_INFO} from '@utils/constants';
import {Quote as QuoteIcon} from 'lucide-react';

const Quote: React.FC = () => {
  return (
    <Box className="px-4 relative w-full md:max-w-3xl mx-auto my-40 text-center backdrop-blur-xs">
      <Box className="text-lg md:text-xl border-2 border-black/50 pt-16 pb-10 px-6 relative">
        {/* Top centered quote icon overlapping the top border */}
        <div className="absolute left-15 -top-4 -translate-x-1/2 bg-white px-2 rotate-180 backdrop-blur-xs rounded-xl">
          <QuoteIcon size={28} className="text-black/60" aria-hidden />
        </div>
        <Box className="text-2xl font-serif">{QUOTE_INFO.text}</Box>
        <Box className="mt-2 text-md text-gray-500">
          <div className="flex justify-end items-center">
            <span className="text-xl leading-none mr-2">—</span>
            <span className="text-md">{QUOTE_INFO.author}</span>
          </div>
        </Box>
        {/* Bottom centered quote icon overlapping the bottom border */}
        <div className="absolute right-10 -bottom-4 -translate-x-1/2 bg-white px-2 backdrop-blur-xs rounded-xl">
          <QuoteIcon size={28} className="text-black/60" aria-hidden />
        </div>
      </Box>
    </Box>
  );
};

export default Quote;
