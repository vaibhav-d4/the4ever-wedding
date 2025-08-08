import {useEffect, useState} from "react";
import {useAppDispatch} from "@utils/redux/hooks";
import {LOGO_TIMEOUT, CONTENT_MOUNT_TIMEOUT} from "@utils/constants";
import {setLoadingState} from "@utils/redux/commonSlice";
import {ContentLoader, LogoLoader} from "@modules/Loaders";
import {Hero} from "@modules/Hero";
import {Box} from "@mui/material";
import {Events} from "@modules/Events";
import {GradientDivider} from "@components/index";

const Home = () => {
  const dispatch = useAppDispatch();
  const [mounted, setMounted] = useState(false);
  // const weddingDate = moment(WEDDING_DATE).toDate();
  // const isDateElapsed = moment() > moment(weddingDate);

  useEffect(() => {
    setTimeout(() => dispatch(setLoadingState(false)), LOGO_TIMEOUT);
    setTimeout(() => setMounted(() => true), CONTENT_MOUNT_TIMEOUT);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      {!mounted ? (
        <LogoLoader />
      ) : (
        <ContentLoader>
          <Hero />
          <GradientDivider title="Events" className="text-5xl lg:text-7xl font-malarkey" />
          <Events />
          <GradientDivider />
        </ContentLoader>
      )}
    </Box>
  );
};

export default Home;
