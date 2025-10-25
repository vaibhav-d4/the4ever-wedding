import {Box, Fade} from '@mui/material';
import {useAppSelector} from '@utils/redux/hooks';
import {BACKDROP_BLUR, LOADER_LOGO} from '@utils/constants';
import clsx from 'clsx';

const LogoLoader = () => {
  const isLoading = useAppSelector((state) => state.common.isLoading);

  return (
    <Box
      className={clsx('absolute flex justify-center items-center px-12 h-full w-full rounded-2xl', `${BACKDROP_BLUR}`)}
    >
      <Fade in={isLoading} timeout={1000}>
        <Box>
          <img src={LOADER_LOGO} alt="Logo" className="h-64" loading="lazy" />
          {/* <Box className="text-center text-5xl font-malarkey font-bold mt-12">
            {YESHA_AND_VAIBHAV}
          </Box> */}
        </Box>
      </Fade>
    </Box>
  );
};

export default LogoLoader;
