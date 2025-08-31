import {Box} from "@mui/material";
import {WEDDING_DATE, VAIBHAV, YESHA, MAIN_LOGO_IMAGE} from "@utils/constants";
import {useParams, useNavigate} from "react-router";
import moment from "moment";
import {startCase} from "lodash";
import GradientDivider from "@components/GradientDivider";
import {Footer} from "@modules/Footer";
import Hashtag from "@components/Hashtag";
import Header from "@modules/Header/Header";
import floralTopLeft from "@assets/invite/floral-top-left.svg";
import floralBottomRight from "@assets/invite/floral-bottom-right.svg";
import {logEvent} from "@utils/analytics";

const Invite = () => {
  const {user_name} = useParams();
  const navigate = useNavigate();
  const displayName = user_name && decodeURIComponent(user_name);
  const weddingDay = moment(WEDDING_DATE).format("dddd");
  const weddingYear = moment(WEDDING_DATE).format("YYYY");
  const weddingMonth = moment(WEDDING_DATE).format("MMM");
  const weddingDayNum = moment(WEDDING_DATE).format("DD");

  return (
    <Box className="min-h-screen flex flex-col justify-center items-center py-10 px-2">
      <Header />
      <Box className="flex justify-center items-center w-full mt-20">
        <img src={MAIN_LOGO_IMAGE} alt="logo-image" className="w-3xs mb-8" />
      </Box>
      <Box
        className="max-w-xl w-11/12 shadow-2xl rounded-3xl border border-gray-200 backdrop-blur-xs mb-20"
        style={{background: "rgba(255, 255, 200, 0.4)"}}
      >
        <img src={floralTopLeft} alt="Floral Decoration" className="absolute w-1/2 rounded-tl-3xl left-0 top-0 -z-1" />
        <Box className="text-center">
          {displayName && (
            <Box className="font-alice-regular text-2xl text-gray-700 mb-8 mt-20">
              Dear <span className="font-dancing-script text-4xl text-primary">{startCase(displayName)}</span>
            </Box>
          )}

          <Box className="font-alice-regular text-xl md:text-lg text-gray-700 mb-10">
            Please join us for the wedding of
          </Box>
          <Box className="mb-8">
            <span className="block font-malarkey text-7xl text-gray-800 mb-2">{YESHA}</span>
            <span className="block font-parisienne text-5xl text-primary">&</span>
            <span className="block font-malarkey text-7xl text-gray-800 mt-2">{VAIBHAV}</span>
          </Box>
          <Box className="text-center font-alice-regular mb-8">
            <Box className="text-xl text-gray-600 -mb-10">{weddingDay.toUpperCase()}</Box>
            <GradientDivider title={<Box className="text-6xl text-gray-800 font-bold">{weddingDayNum}</Box>} />
            <Box className="text-xl text-gray-600 -mt-8">{weddingMonth.toUpperCase()}</Box>
            <Box className="text-xl text-gray-600">{weddingYear}</Box>
          </Box>

          <Box className="font-alice-regular text-3xl text-gray-700 mb-2 italic tracking-wide">Save The Date</Box>
        </Box>

        <Box className="flex justify-center mb-8">
          <span
            className="mt-8 mb-16 hover:cursor-pointer hover:text-gray-500 text-gray-400  px-16 py-3 border rounded-2xl"
            onClick={() => {
              navigate("/");
              logEvent("explore_click", {section: "Invite Page"});
            }}
          >
            Explore →
          </span>
        </Box>
        <img
          src={floralBottomRight}
          alt="Floral Decoration"
          className="absolute w-1/2 right-0 bottom-0 rounded-br-3xl -z-1"
        />
      </Box>
      <Box className="text-center mt-8">
        <Hashtag />
      </Box>
      <Footer />
    </Box>
  );
};

export default Invite;
