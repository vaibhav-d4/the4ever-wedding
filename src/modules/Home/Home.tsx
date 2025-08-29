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

const Home = () => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  // const weddingDate = moment(WEDDING_DATE).toDate();
  // const isDateElapsed = moment() > moment(weddingDate);

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
          <GradientDivider title="Events" className="text-5xl lg:text-7xl font-malarkey" />
          <Events />
          <GradientDivider />
          <SignOff />
        </ContentLoader>
      )}
    </Box>
  );
};

export default Home;
