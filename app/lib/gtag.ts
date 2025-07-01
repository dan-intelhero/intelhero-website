// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export const GA_TRACKING_ID = 'G-7KMEJMVXMR';

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common event tracking functions
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'click',
    category: 'engagement',
    label: buttonName,
  });
};

export const trackSignup = () => {
  event({
    action: 'sign_up',
    category: 'conversion',
    label: 'waitlist_signup',
  });
};

export const trackPageVisit = (pageName: string) => {
  event({
    action: 'page_view',
    category: 'navigation',
    label: pageName,
  });
};
