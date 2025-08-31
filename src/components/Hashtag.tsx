import {Box, Fade} from "@mui/material";
import {HASHTAG} from "@utils/constants";
import {useInView} from "@utils/hooks/useInView";

const Hashtag = ({className = ""}: {className?: string}) => {
  const [ref, inView] = useInView({threshold: 0.2});
  return (
    <Fade in={inView} timeout={1000}>
      <Box
        ref={ref}
        className={`text-3xl tracking-wider select-all text-primary transition-all duration-700 ${className}`}
        style={{willChange: "opacity, transform"}}
      >
        {HASHTAG}
      </Box>
    </Fade>
  );
};

export default Hashtag;
