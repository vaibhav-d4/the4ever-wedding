import { Box } from "@mui/material";
import { format } from "date-fns";
import { toUpper as _toUpper } from "lodash";
// import logo from "@assets/logo/vy-logo-black-1.svg";
// import logo2 from "@assets/logo/vy-logo-black-2.svg";
import logo3 from "@assets/logo/vy-logo-blue-1.svg";
import image1 from "@assets/couple/image-1.jpg";
import image2new from "@assets/couple/image-2.jpg";
import image3 from "@assets/couple/image-3.jpg";
// import image4 from "@assets/couple/image-4.jpg";
import { WEDDING_DATE } from "@utils/constants";

const images = [
  { src: image1, alt: "image-1" },
  { src: image2new, alt: "image-2" },
  { src: image3, alt: "image-3" },
  // { src: image4, alt: "image-4" },
];
const menu = [
  {
    title: "Welcome",
    href: "/",
  },
  {
    title: "People",
    href: "/people",
  },
  {
    title: "Schedule",
    href: "/schedule",
  },
];

const Home = () => {
  return (
    <Box className="text-center flex flex-col gap-6 mb-10">
      {/* LOGO */}
      <Box className="flex justify-center gap-8 mt-4">
        <img src={logo3} alt="Logo" className="h-64" />
      </Box>

      {/* MENU */}
      <Box className="text-xl text-center flex justify-center gap-6">
        {menu.map((item) => (
          <Box key={item.title} className="cursor-pointer hover:underline">
            {item.title}
          </Box>
        ))}
      </Box>

      {/* IMAGES */}
      <Box className="flex flex-wrap gap-8 justify-center">
        {images.map((img) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className="h-64 rounded shadow-2xl"
          />
        ))}
      </Box>

      {/* DATE */}
      <Box className="font-hannah text-5xl text-center">
        {_toUpper(format(WEDDING_DATE, "MMMM dd, yyyy"))}
      </Box>

      {/* Names */}
      <Box className="text-6xl font-malarkey">Yesha & Vaibhav</Box>
      <Box className="font-bold text-3xl -mt-2">#The4Ever</Box>
    </Box>
  );
};

export default Home;
