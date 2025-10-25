import logo from '@assets/logo/vy-logo-blue-bg-t.svg';
import loaderLogo from '@assets/logo/loader-logo.svg';
import haldiImage from '@assets/events/haldi-temp-1.jpg';
import garbaImage from '@assets/events/sangeet-temp-1.jpg';
import weddingImage from '@assets/events/wedding-temp-1.jpg';
import coupleLogo from '@assets/couple/couple-info-logo-bg-floral.svg';

export const WEDDING_DATE = import.meta.env.VITE_WEDDING_DATE || '08-Feb-2026 06:00:00';
// export const WEDDING_DATE = '08-Feb-2026 06:00:00';

export const WEBSITE_TYPES = [
  {label: 'Website 1', value: 1},
  {label: 'Website 2', value: 2}
];

export const LOGO_TIMEOUT = 3000;
export const CONTENT_MOUNT_TIMEOUT = LOGO_TIMEOUT + 500;
export const BACKDROP_BLUR = 'backdrop-blur-md'; // xs, sm, md, lg, xl, 2xl, 3xl

export const MONTHS_LABEL = 'Months';
export const DAYS_LABEL = 'Days';
export const HOURS_LABEL = 'Hours';
export const MINUTES_LABEL = 'Mins';
export const SECONDS_LABEL = 'Secs';

export const YESHA_AND_VAIBHAV = 'Yesha & Vaibhav';
export const Y_AND_V = 'Y & V';
export const YESHA = 'Yesha';
export const VAIBHAV = 'Vaibhav';
export const HASHTAG = '#The4Ever';

export const LOCATION_NAME = 'Rajhans Abhinandan';
export const LOCATION_FULL_NAME = 'Rajhans Abhinandan, Bhopal';
export const LOCATION_GOOGLE_LINK = 'https://maps.app.goo.gl/ZafM4K5oUyR3Qebs6';

export const MAX_WIDTH = 1240;

export const MAIN_LOGO_IMAGE = logo;
export const LOADER_LOGO = loaderLogo;

export const CALENDAR_INVITE_LINK = import.meta.env.VITE_CALENDAR_INVITE_LINK;

export const WEDDING_EVENTS = [
  {
    name: 'Haldi',
    image:
      'https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // image: haldiImage,
    eventImage: haldiImage,
    quote: 'Let the yellow shine and the love bloom.',
    info: 'Haldi ceremony marks the beginning of the wedding festivities, bringing joy and blessings.'
  },
  {
    name: 'Garba Night',
    image: 'https://i.pinimg.com/1200x/71/d4/f6/71d4f6612bd4d471bdcc184ddbd1a0f2.jpg',
    eventImage: garbaImage,
    quote: 'Dance to the rhythm of love and tradition.',
    info: 'A night of music, dance, and celebration with family and friends, making memories that last forever.'
  },
  {
    name: 'Wedding & Reception',
    image: 'https://i.pinimg.com/1200x/d1/a6/73/d1a6732c996fe5ccb2eb7ecfd2ac38fb.jpg',
    eventImage: weddingImage,
    quote: 'Two souls, one journey, endless love.',
    info: 'The grand wedding and reception, where we begin our new chapter together.'
  }
];

export const THE_COUPLE_INFO = {
  title: 'The Couple',
  subtitle: '💍 Meet the Bride & Groom',
  couple_tagline: 'Two hearts, two personalities - perfectly balanced.',
  couple_description:
    "Yesha's calm, grounded nature and Vaibhav's thoughtful mind create a bond full of love, laughter, and understanding. Together, they make life beautifully complete.",
  logo: coupleLogo,
  groom: {
    name: VAIBHAV,
    age: 27,
    occupation: 'Senior Software Engineer',
    fatherName: 'Late. Mr. Chetan Dholakia',
    motherName: 'Mrs. Neela Dholakia',
    tagline: "He's the strength behind every smile and the warmth in every moment.",
    description:
      "A dreamer with a grounded heart, Vaibhav moves through life with purpose and passion. His presence brings comfort, his words carry sincerity, and his smile holds a quiet magic that makes everything feel lighter. Behind his calm confidence lies a heart that loves deeply and stands unwavering for those he cherishes. He's the steady rhythm to life's song — strong, kind, and endlessly devoted."
  },
  bride: {
    name: YESHA,
    age: 27,
    occupation: 'HR Admin',
    fatherName: 'Mr. Bhadresh Shah',
    motherName: 'Mrs. Bela Shah',
    tagline: "She's the calm in every chaos and the joy in every heartbeat.",
    description:
      "With a heart as tender as her smile, Yesha carries an aura of grace that softens every moment around her. Her laughter feels like sunshine - bright, pure, and full of warmth. She believes in love that's gentle yet powerful, finding beauty in every emotion and meaning in every connection. Her compassion, charm, and quiet strength make her the soul of every story she's part of."
  }
};

export const MENU_ITEMS = [
  {
    title: 'Welcome',
    href: '/'
  },
  {
    title: 'People',
    href: '/people'
  },
  {
    title: 'Schedule',
    href: '/schedule'
  }
];
