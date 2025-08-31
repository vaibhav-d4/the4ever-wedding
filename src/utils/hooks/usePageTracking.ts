import {useEffect} from "react";
import {useLocation} from "react-router";
import {logEvent, logPageView, setBaseParams} from "@utils/analytics";

declare global {
  interface Navigator {
    userAgentData?: {
      brands: {brand: string; version: string}[];
      platform: string;
      mobile: boolean;
    };
  }
}

const usePageTracking = () => {
  const location = useLocation();

  const browser = navigator.userAgent;
  const language = navigator.language;
  const platform = navigator.userAgentData?.platform ?? "Unknown";
  const isMobile = navigator.userAgentData?.mobile ?? false;
  const screenRes = `${window.screen.width}x${window.screen.height}`;

  useEffect(() => {
    // Set global base params for analytics
    setBaseParams({
      location,
      browser,
      language,
      platform,
      isMobile,
      screenRes
    });

    logPageView(location.pathname + location.search);

    logEvent("custom_device_info", {
      browser,
      language,
      platform,
      isMobile,
      screenRes
    });
  }, [location, browser, language, platform, isMobile, screenRes]);

  return {
    location,
    browser,
    language,
    platform,
    isMobile,
    screenRes
  };
};

export default usePageTracking;
