// analytics.ts - helper for GA events

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: { [key: string]: unknown }) => void;
  }
}

// Global base params for analytics
let baseParams: { [key: string]: unknown } = {};

// Call this from a top-level component to set base params (e.g., from usePageTracking)
export const setBaseParams = (params: { [key: string]: unknown }) => {
  baseParams = params;
};

// Generic typed event logger
export const logEvent = (eventName: string, params?: { [key: string]: unknown }): void => {
  if (window.gtag) {
    window.gtag("event", eventName, { ...baseParams, ...params });
  } else {
    // console.warn("gtag is not defined yet");
  }
};

// Specific convenience helpers
export const logPageView = (path: string): void => {
  logEvent("page_view", { page_path: path });
};

export const logCalendarClick = (): void => {
  logEvent("calendar_link", {
    event_category: "engagement",
    event_label: "Calendar Button"
  });
};
