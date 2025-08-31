// analytics.ts - helper for GA events

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: {[key: string]: unknown}) => void;
  }
}

// Generic typed event logger
export const logEvent = (eventName: string, params?: {[key: string]: unknown}): void => {
  if (window.gtag) {
    window.gtag("event", eventName, params);
  } else {
    console.warn("gtag is not defined yet");
  }
};

// Specific convenience helpers
export const logPageView = (path: string): void => {
  logEvent("page_view", {page_path: path});
};

export const logCalendarClick = (): void => {
  logEvent("calendar_link", {
    event_category: "engagement",
    event_label: "Calendar Button"
  });
};
