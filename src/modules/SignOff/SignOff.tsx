import {GradientDivider} from '@components/index';
import {Box} from '@mui/material';

const SignOff = () => {
  return (
    <Box>
      <Box className="my-20 flex flex-col items-center gap-10 px-4">
        <Box className="text-3xl text-center">
          Together with our families, we invite you to our wedding celebration 💝
        </Box>
        <Box className="text-5xl text-center">Thank You!</Box>
      </Box>
      <GradientDivider borderClass="!h-[2px]" />
      <div className="text-center px-10">
        <span className="text-5xl text-black/80 tracking-wide my-3 font-great-vibes italic leading-snug">
          Forever begins here 💍
        </span>
      </div>
    </Box>
  );
};

export default SignOff;
