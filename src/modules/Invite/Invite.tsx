import {Box} from "@mui/material";
import {WEDDING_DATE, VAIBHAV, YESHA, MAIN_LOGO_IMAGE} from "@utils/constants";
import {useParams, useNavigate} from "react-router";
import moment from "moment";
import {startCase} from "lodash";
import GradientDivider from "@components/GradientDivider";
import {Footer} from "@modules/Footer";
import Hashtag from "@components/Hashtag";
import Header from "@modules/Header/Header";

const Invite = () => {
  const {user_name} = useParams();
  const navigate = useNavigate();
  const displayName = user_name && decodeURIComponent(user_name);
  const weddingDay = moment(WEDDING_DATE).format("dddd");
  const weddingYear = moment(WEDDING_DATE).format("YYYY");
  const weddingMonth = moment(WEDDING_DATE).format("MMM");
  const weddingDayNum = moment(WEDDING_DATE).format("DD");

  return (
    <Box className="min-h-screen py-10 px-2 mt-20">
      <Header />
      <Box className="flex justify-center items-center">
        <img src={MAIN_LOGO_IMAGE} alt="logo-image" className="w-3xs mb-8" />
      </Box>
      <Box
        className="relative w-full max-w-xl mx-auto shadow-2xl rounded-3xl p-4 border border-gray-200 backdrop-blur-xs mb-20"
        style={{background: "rgba(255, 255, 200, 0.4)"}}
      >
        <Box className="text-center">
          {displayName && (
            <Box className="font-alice-regular text-2xl text-gray-700 my-8">
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
          <span className="mt-8 hover:cursor-pointer hover:text-gray-500 text-gray-400" onClick={() => navigate("/")}>
            Explore →
          </span>
        </Box>
      </Box>
      <Box className="text-center mt-8">
        <Hashtag />
      </Box>
      <Footer />
    </Box>
  );
};

export default Invite;
