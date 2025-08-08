import {Box} from "@mui/material";

const Footer = () => {
  return (
    <Box
      className="w-full text-center mt-8 text-black/60 text-base animate-fade-in"
      sx={{
        animation: "fadeIn 1.2s ease",
        "@keyframes fadeIn": {
          "0%": {opacity: 0, transform: "translateY(20px)"},
          "100%": {opacity: 1, transform: "translateY(0)"}
        }
      }}
    >
      Handcrafted with <span className="text-red-500 animate-heart">❤️</span> by{" "}
      <a
        href="https://www.instagram.com/vaibhav_d4/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black/60 font-semibold  transition-colors duration-200 tracking-wide italic font-alice-regular text-lg"
        style={{
          transition: "color 0.3s, text-shadow 0.3s"
        }}
      >
        Vaibhav
      </a>
      <style>{`
        .animate-heart {
          display: inline-block;
          animation: heartBeat 1.2s infinite;
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          10% { transform: scale(1.2); }
          20% { transform: scale(0.95); }
          30% { transform: scale(1.1); }
          40% { transform: scale(1); }
        }
      `}</style>
    </Box>
  );
};

export default Footer;
