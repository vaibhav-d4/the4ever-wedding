import {useEffect, useState} from 'react';
import {useAppDispatch} from '@utils/redux/hooks';
import {LOGO_TIMEOUT, CONTENT_MOUNT_TIMEOUT, WEDDING_DATE} from '@utils/constants';
import {setLoadingState} from '@utils/redux/commonSlice';
import {ContentLoader, LogoLoader} from '@modules/Loaders';
import {Hero} from '@modules/Hero';
import {Box} from '@mui/material';
import {Events} from '@modules/Events';
import {GradientDivider} from '@components/index';
// import CapturedMoments from '@components/CapturedMoments';
import {SignOff} from '@modules/SignOff';
import {Fade} from '@mui/material';
import {useInView} from '@utils/hooks/useInView';
import moment from 'moment';
import CoupleInfo from '@components/CoupleInfo';
import Quote from '@components/Quote';
import Accommodation from '@components/Accommodation';

const Home = () => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const weddingDate = moment(WEDDING_DATE).toDate();
  const isDateElapsed = moment() > moment(weddingDate);

  // Intersection observer refs and states for fade-in
  const [eventsRef, eventsInView] = useInView({threshold: 0.1});
  const [divider1Ref, divider1InView] = useInView({threshold: 0.1});
  const [divider2Ref, divider2InView] = useInView({threshold: 0.1});
  // const [momentsRef, momentsInView] = useInView({threshold: 0.1});
  const [coupleInfoRef, coupleInfoInView] = useInView({threshold: 0.1});
  const [quoteRef, quoteInView] = useInView({threshold: 0.1});
  const [accommodationRef, accommodationInView] = useInView({threshold: 0.1});
  const [signOffRef, signOffInView] = useInView({threshold: 0.1});

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };
    if (document.readyState === 'complete') {
      setPageLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!pageLoaded) return;
    const logoTimeout = setTimeout(() => dispatch(setLoadingState(false)), LOGO_TIMEOUT);
    const contentTimeout = setTimeout(() => setMounted(true), CONTENT_MOUNT_TIMEOUT);
    return () => {
      clearTimeout(logoTimeout);
      clearTimeout(contentTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageLoaded]);

  return (
    <Box>
      {!pageLoaded || !mounted ? (
        <LogoLoader />
      ) : (
        <ContentLoader>
          <Hero />
          {!isDateElapsed && (
            <Fade in={eventsInView} timeout={1000}>
              <div ref={eventsRef}>
                <Events />
              </div>
            </Fade>
          )}
          <Fade in={coupleInfoInView} timeout={1000}>
            <div ref={coupleInfoRef}>
              <CoupleInfo />
            </div>
          </Fade>
          <Fade in={quoteInView} timeout={1000}>
            <div ref={quoteRef}>
              <Quote />
            </div>
          </Fade>
          {/* <Fade in={momentsInView} timeout={1000}>
            <div ref={momentsRef}>
              <CapturedMoments />
            </div>
          </Fade> */}
          {!isDateElapsed && (
            <>
              <Fade in={divider1InView} timeout={1000}>
                <div ref={divider1Ref}>
                  <GradientDivider />
                </div>
              </Fade>
              <Fade in={accommodationInView} timeout={1000}>
                <div ref={accommodationRef}>
                  <Accommodation />
                </div>
              </Fade>
            </>
          )}
          <Fade in={divider2InView} timeout={1000}>
            <div ref={divider2Ref}>
              <GradientDivider />
            </div>
          </Fade>
          <Fade in={signOffInView} timeout={1000}>
            <div ref={signOffRef}>
              <SignOff />
            </div>
          </Fade>
        </ContentLoader>
      )}
    </Box>
  );
};

export default Home;
