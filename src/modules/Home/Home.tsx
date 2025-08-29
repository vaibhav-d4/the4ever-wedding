import {useEffect, useState} from "react";
import {useAppDispatch} from "@utils/redux/hooks";
import {LOGO_TIMEOUT, CONTENT_MOUNT_TIMEOUT} from "@utils/constants";
import {setLoadingState} from "@utils/redux/commonSlice";
import {ContentLoader, LogoLoader} from "@modules/Loaders";
import {Hero} from "@modules/Hero";
import {Box} from "@mui/material";
import {Events} from "@modules/Events";
import {GradientDivider} from "@components/index";
import {SignOff} from "@modules/SignOff";
import {Fade} from "@mui/material";
import {useInView} from "@utils/hooks/useInView";

const Home = () => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  // const weddingDate = moment(WEDDING_DATE).toDate();
  // const isDateElapsed = moment() > moment(weddingDate);

  // Intersection observer refs and states for fade-in
  const [eventsRef, eventsInView] = useInView({threshold: 0.1});
  const [dividerRef, dividerInView] = useInView({threshold: 0.1});
  const [signOffRef, signOffInView] = useInView({threshold: 0.1});

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };
    if (document.readyState === "complete") {
      setPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      window.removeEventListener("load", handleLoad);
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
          <Fade in={eventsInView} timeout={1000}>
            <div ref={eventsRef}>
              <GradientDivider title="Events" className="text-5xl lg:text-7xl font-malarkey" />
              <Events />
            </div>
          </Fade>
          <Fade in={dividerInView} timeout={1000}>
            <div ref={dividerRef}>
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
