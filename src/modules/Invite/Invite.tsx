import { useEffect } from 'react';
import { Box } from '@mui/material';
import {
  WEDDING_DATE,
  VAIBHAV,
  YESHA,
  MAIN_LOGO_IMAGE,
  HASHTAG,
  LOCATION_GOOGLE_LINK,
  LOCATION_FULL_NAME,
} from '@utils/constants';
import { useParams, useNavigate } from 'react-router';
import moment from 'moment';
import { startCase } from 'lodash';
import GradientDivider from '@components/GradientDivider';
import { Footer } from '@modules/Footer';
import Hashtag from '@components/Hashtag';
import Header from '@modules/Header/Header';
import floralTopLeft from '@assets/common/floral-top-left.svg';
import { logEvent } from '@utils/analytics';
// import CoupleInfo from '@components/CoupleInfo';
import { SignOff } from '@modules/SignOff';
import { MapPin, MoveRight } from 'lucide-react';

const Invite = () => {
  const { user_name } = useParams();
  const navigate = useNavigate();

  const displayName = user_name && decodeURIComponent(user_name);
  const weddingDay = moment(WEDDING_DATE).format('dddd');
  const weddingYear = moment(WEDDING_DATE).format('YYYY');
  const weddingMonth = moment(WEDDING_DATE).format('MMM');
  const weddingDayNum = moment(WEDDING_DATE).format('DD');

  useEffect(() => {
    const previousTitle = document.title;
    document.title = `You're Invited ${startCase(displayName)}! | ${HASHTAG}`;
    logEvent('page_view', {
      page: 'Invite Page',
      user: displayName || 'Guest',
    });
    return () => {
      document.title = previousTitle;
    };
  }, [displayName]);

  return (
    <Box className='min-h-screen flex flex-col justify-center items-center py-10 px-2'>
      <Header />
      <Box className='flex justify-center items-center w-full mt-20'>
        <img src={MAIN_LOGO_IMAGE} alt='logo-image' className='w-3xs mb-8' />
      </Box>
      <Box
        className='max-w-xl w-11/12 shadow-2xl rounded-3xl border border-gray-200 backdrop-blur-xs mb-20'
        style={{ background: 'rgba(255, 255, 200, 0.4)' }}
      >
        <img
          src={floralTopLeft}
          alt='Floral Decoration'
          className='absolute w-1/2 rounded-tl-3xl left-0 top-0 -z-1'
          loading='lazy'
        />
        <Box className='text-center'>
          {displayName && (
            <Box className='font-alice-regular text-2xl text-gray-700 mb-8 mt-24'>
              Dear{' '}
              <span className='font-malarkey text-5xl text-primary'>
                {startCase(displayName)}
              </span>
            </Box>
          )}

          <Box className='font-alice-regular text-xl text-gray-700 mb-12'>
            Please join us for the wedding of
          </Box>
          <Box className='mb-8'>
            <span className='block font-amsterdam text-5xl text-gray-800/90 mb-4'>
              {VAIBHAV}
            </span>
            <span className='block font-parisienne text-5xl text-primary my-6'>
              &
            </span>
            <span className='block font-amsterdam text-5xl text-gray-800/90 mt-4 mb-16'>
              {YESHA}
            </span>
          </Box>
          <Box className='text-center font-alice-regular mb-8'>
            <Box className='text-xl text-gray-600 -mb-10'>
              {weddingDay.toUpperCase()}
            </Box>
            <GradientDivider
              title={
                <Box className='text-6xl text-gray-800 font-bold'>
                  {weddingDayNum}
                </Box>
              }
            />
            <Box className='text-xl text-gray-600 -mt-8'>
              {weddingMonth.toUpperCase()}
            </Box>
            <Box className='text-xl text-gray-600'>{weddingYear}</Box>
          </Box>

          <Box className='font-alice-regular text-3xl text-gray-700 mb-2 italic tracking-wide'>
            Save The Date
          </Box>
        </Box>
        <Box className='flex justify-center'>
          <Box
            className='mt-8 mb-32 text-center cursor-pointer max-w-fit p-2'
            onClick={() => window.open(LOCATION_GOOGLE_LINK, '_blank')}
            title='View location'
          >
            <span className='inline-block align-middle'>
              <MapPin />
            </span>
            <span className='text-xl ml-2 inline-block align-middle underline decoration-dotted text-gray-700'>
              {LOCATION_FULL_NAME}
            </span>
            <span className='block text-xs text-gray-500 mt-1 '>
              View the venue on Google Maps
            </span>
          </Box>
        </Box>

        {/* <Box className='flex justify-center mb-8'>
          <span
            className='mt-12 mb-16 hover:cursor-pointer hover:text-gray-500 text-gray-400  px-16 py-3 border rounded-2xl hover:bg-amber-100'
            onClick={() => {
              navigate('/');
              logEvent('explore_click', {
                page: 'Invite Page',
                user: displayName || 'Guest',
              });
            }}
          >
            Explore →
          </span>
        </Box> */}
        <img
          src={floralTopLeft}
          alt='Floral Decoration'
          className='absolute w-1/2 right-0 bottom-0 rounded-br-3xl -z-1 rotate-180'
          loading='lazy'
        />
      </Box>
      {/* <Box className='-mt-10'>
        <CoupleInfo />
      </Box> */}

      <Box className='flex justify-center mb-8'>
        <span
          className='mt-8 hover:cursor-pointer hover:text-gray-500 text-gray-400  px-28 py-6 border rounded-2xl hover:bg-amber-100 text-2xl flex justify-center items-center gap-2'
          onClick={() => {
            navigate('/');
            logEvent('explore_click', {
              page: 'Invite Page',
              user: displayName || 'Guest',
            });
          }}
        >
          Explore <MoveRight />
        </span>
      </Box>
      <SignOff />
      <Box className='text-center mt-8'>
        <Hashtag />
      </Box>
      <Footer />
    </Box>
  );
};

export default Invite;
